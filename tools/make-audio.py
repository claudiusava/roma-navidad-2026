"""Genera public/audio/*.mp3 y src/app/data/audio.generated.ts con Piper (voz es_ES-davefx-medium).

Uso: python -I tools/make-audio.py <ruta-al-modelo.onnx> [raiz-del-proyecto]
Cada capítulo es un MP3; se guarda el segundo en que empieza cada frase para resaltar el texto.
"""
import json, sys, wave, io
from pathlib import Path
import lameenc
from piper import PiperVoice

model = sys.argv[1]
root = Path(sys.argv[2] if len(sys.argv) > 2 else '.')
data = json.loads((root / 'tools' / 'audio-text.json').read_text(encoding='utf-8'))
voice = PiperVoice.load(model)
rate = voice.config.sample_rate
out_dir = root / 'public' / 'audio'
out_dir.mkdir(parents=True, exist_ok=True)

def synth(text):
    return b''.join(ch.audio_int16_bytes for ch in voice.synthesize(text))

pause = b'\x00\x00' * int(rate * 0.35)
title_pause = b'\x00\x00' * int(rate * 0.7)
manifest = {}
total = 0
for g in data:
    files = []
    for i, ch in enumerate(g['chapters']):
        name = f"{g['slug']}-{i + 1}.mp3"
        pcm = bytearray(synth(ch['title'] + '.'))
        pcm += title_pause
        starts = []
        for s in ch['sentences']:
            starts.append(round(len(pcm) / 2 / rate, 2))
            pcm += synth(s) + pause
        enc = lameenc.Encoder()
        enc.set_bit_rate(40)
        enc.set_in_sample_rate(rate)
        enc.set_channels(1)
        enc.set_quality(2)
        mp3 = enc.encode(bytes(pcm)) + enc.flush()
        (out_dir / name).write_bytes(mp3)
        total += len(mp3)
        files.append({'file': name, 'duration': round(len(pcm) / 2 / rate, 1), 'starts': starts})
    manifest[g['key']] = files
    print(g['key'], len(files), flush=True)

ts = ('// Generado por tools/make-audio.py — no editar a mano.\n'
      'export interface AudioTrack {\n  file: string;\n  duration: number;\n  starts: number[];\n}\n\n'
      f'export const AUDIO_MB = {round(total / 1e6)};

'
      'export const AUDIO_TRACKS: Record<string, AudioTrack[]> = ' + json.dumps(manifest, ensure_ascii=False) + ';\n')
(root / 'src' / 'app' / 'data' / 'audio.generated.ts').write_text(ts, encoding='utf-8')
print(f'total {total / 1e6:.1f} MB')
