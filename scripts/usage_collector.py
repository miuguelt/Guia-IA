import sovereign_core
import sys

def collect_turn_usage(input_tokens=1500, output_tokens=1500):
    """Simula o calcula el uso del turno actual."""
    print(f"📡 Calculando uso del turno... (+{input_tokens + output_tokens} tokens)")
    sovereign_core.track_usage(input_tokens, output_tokens)
    print("✅ Uso registrado en session_usage.json y sincronizado con el S-SOT.")

if __name__ == "__main__":
    # Si se pasan argumentos, usarlos, si no, usar defaults razonables
    in_t = int(sys.argv[1]) if len(sys.argv) > 1 else 1500
    out_t = int(sys.argv[2]) if len(sys.argv) > 2 else 1500
    collect_turn_usage(in_t, out_t)
