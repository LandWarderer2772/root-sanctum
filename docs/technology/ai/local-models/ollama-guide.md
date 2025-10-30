# Ollama Setup Guide

## Overview
Ollama is a user-friendly tool for running LLMs locally, offering simple model management and a clean CLI interface.

## Installation

### Windows
1. Download the latest Windows installer from [Ollama's official website](https://ollama.ai/download)
2. Run the installer and follow the prompts
3. Open Command Prompt or PowerShell to use Ollama

### macOS
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

### Linux
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

## Basic Usage

### Pull and Run Models
1. Pull a model:
```bash
ollama pull llama2
```

2. Start a chat:
```bash
ollama run llama2
```

### Available Commands
- `ollama list`: Show available models
- `ollama pull`: Download a model
- `ollama run`: Start a chat session
- `ollama serve`: Start the Ollama server

## Model Management

### Custom Models
Create a Modelfile:
```
FROM llama2
PARAMETER temperature 0.7
PARAMETER top_p 0.9
SYSTEM "You are a helpful assistant"
```

Build the model:
```bash
ollama create mycustom -f Modelfile
```

### Resource Management
- Set memory usage: `OLLAMA_HOST_MEMORY_LIMIT`
- Adjust GPU memory: `OLLAMA_GPU_MEMORY_LIMIT`

## API Integration

Ollama provides a REST API for integration:
```bash
curl -X POST http://localhost:11434/api/generate -d '{
  "model": "llama2",
  "prompt": "Why is the sky blue?"
}'
```

## Best Practices
- Start with smaller models like `llama2` or `mistral`
- Monitor system resources
- Use environment variables for resource limits
- Keep models updated

## Troubleshooting

### Common Issues
1. Port conflicts
   - Change default port with `OLLAMA_HOST`
2. Memory issues
   - Adjust memory limits
   - Use smaller models

### Performance Optimization
- Enable GPU acceleration if available
- Adjust context length as needed
- Use appropriate temperature settings

## Additional Resources
- [Official Documentation](https://ollama.ai/docs)
- [GitHub Repository](https://github.com/ollama/ollama)
- [Model Library](https://ollama.ai/library)