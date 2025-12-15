import { TheoryTopic } from '@/types/theory';

export const pytorchTheory: TheoryTopic = {
  topicId: 'pytorch',
  topicName: 'PyTorch',
  category: 'Data & AI',
  description: 'PyTorch fundamentals, tensors, autograd, training loops, deployment, and best practices.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Tensors',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is PyTorch?', content: 'A deep learning framework with imperative (eager) execution, dynamic computation graphs, and strong Python/NumPy interoperability.' },
        { id: 'q2', title: 'Tensors?', content: 'Multi-dimensional arrays similar to NumPy arrays but support GPU acceleration; created via torch.tensor/zeros/ones/randn.' },
        { id: 'q3', title: 'Device management?', content: 'Place tensors/models on CPU or GPU with .to(device) or .cuda(); keep model and data on same device to avoid copies.' },
        { id: 'q4', title: 'Dtype and shape?', content: 'Common dtypes: float32, float16/bfloat16, int64 (for indices). Shape conventions vary by domain (NCHW for images).' },
        { id: 'q5', title: 'Broadcasting?', content: 'Automatic expansion of dimensions for compatible shapes; aligns trailing dims; avoid unintended broadcasting bugs.' },
        { id: 'q6', title: 'Random seeds?', content: 'Use torch.manual_seed and torch.cuda.manual_seed_all for reproducibility; also set cudnn.deterministic and benchmark flags appropriately.' },
        { id: 'q7', title: 'NumPy interop?', content: 'torch.from_numpy shares memory; .numpy() returns NumPy view for CPU tensors; detach before converting from requires_grad.' },
        { id: 'q8', title: 'Tensor views vs copies?', content: 'view/reshape can share storage; cloning creates copy; be careful when modifying views that backprop depends on.' },
        { id: 'q9', title: 'Gradient tracking control?', content: 'Use with torch.no_grad() or tensor.detach() to stop autograd; useful for eval/inference or frozen layers.' },
        { id: 'q10', title: 'Saving/loading?', content: 'Use torch.save/torch.load with state_dict for models/optimizers; prefer state_dict over full object pickling.' }
      ]
    },
    {
      id: 'autograd',
      title: 'Autograd and Backprop',
      content: '',
      subsections: [
        { id: 'q11', title: 'Computation graph?', content: 'Dynamic graph built during forward pass; nodes are tensors/functions; freed after backward unless retain_graph True.' },
        { id: 'q12', title: 'requires_grad?', content: 'Flag to track gradients. Set on parameters; disable for inputs not needing grads to save memory.' },
        { id: 'q13', title: 'Backward pass?', content: 'loss.backward() accumulates gradients in .grad buffers. Clear grads each step via optimizer.zero_grad() or set_to_none.' },
        { id: 'q14', title: 'Gradient accumulation?', content: 'Accumulate over microbatches before optimizer.step(); adjust loss scaling; zero grads between accumulation windows.' },
        { id: 'q15', title: 'In-place ops?', content: 'Can break autograd if modifying values needed for backward. Avoid in-place on tensors requiring grad unless safe.' },
        { id: 'q16', title: 'Detaching?', content: 'Use detach() to stop gradient flow (e.g., target networks, EMA). Do not detach parameters accidentally.' },
        { id: 'q17', title: 'Custom autograd functions?', content: 'Subclass torch.autograd.Function with static forward/backward for custom gradients.' },
        { id: 'q18', title: 'Exploding/vanishing gradients?', content: 'Use gradient clipping, proper initialization, normalization, and residual connections to stabilize training.' },
        { id: 'q19', title: 'Mixed precision?', content: 'torch.cuda.amp.autocast and GradScaler enable float16/bfloat16 training for speed; watch for overflow.' },
        { id: 'q20', title: 'Checkpointing?', content: 'torch.utils.checkpoint trades compute for memory by recomputing forward during backward for large models.' }
      ]
    },
    {
      id: 'training',
      title: 'Data Loading and Training Loops',
      content: '',
      subsections: [
        { id: 'q21', title: 'Dataset/Dataloader?', content: 'Implement __len__/__getitem__ in Dataset; DataLoader handles batching, shuffling, workers, and pin_memory for GPU throughput.' },
        { id: 'q22', title: 'Transforms?', content: 'Use torchvision/torchtext/torchaudio transforms for preprocessing/augmentation; compose pipelines; ensure same transform for paired data when needed.' },
        { id: 'q23', title: 'Training loop steps?', content: 'Forward pass, compute loss, zero gradients, backward, optimizer.step(), log metrics, eval periodically, save checkpoints.' },
        { id: 'q24', title: 'Common losses?', content: 'CrossEntropyLoss for classification, MSELoss/L1Loss, BCEWithLogits, NLLLoss, SmoothL1, margin/ranking losses.' },
        { id: 'q25', title: 'Optimizers?', content: 'SGD(+momentum), Adam/AdamW, RMSprop, Adagrad; AdamW with weight decay common; tune learning rate and betas.' },
        { id: 'q26', title: 'Learning rate schedules?', content: 'Step, MultiStep, Exponential, Cosine, OneCycle; warmup common; use scheduler.step() at correct time.' },
        { id: 'q27', title: 'Batch size trade-offs?', content: 'Larger batches improve throughput but need tuning LR; gradient accumulation simulates bigger batches on limited memory.' },
        { id: 'q28', title: 'Evaluation mode?', content: 'model.eval() toggles layers like dropout/batchnorm; wrap inference in torch.no_grad() to save memory.' },
        { id: 'q29', title: 'Overfitting controls?', content: 'Use data augmentation, weight decay, dropout, early stopping, regularization, and proper validation splits.' },
        { id: 'q30', title: 'Logging?', content: 'Use TensorBoard, WandB, MLflow; log loss, metrics, LR, gradients, and example predictions.' }
      ]
    },
    {
      id: 'models',
      title: 'Models, Deployment, and Performance',
      content: '',
      subsections: [
        { id: 'q31', title: 'Module structure?', content: 'Subclass nn.Module; define layers in __init__, operations in forward. Use Sequential for simple stacks.' },
        { id: 'q32', title: 'Pretrained models?', content: 'torchvision/torchtext/torchaudio offer pretrained models; fine-tune with proper transforms and head replacement.' },
        { id: 'q33', title: 'Serialization formats?', content: 'state_dict via torch.save; TorchScript for graph capture; ONNX export for interoperability; use dynamic axes if needed.' },
        { id: 'q34', title: 'Inference optimization?', content: 'Use TorchScript, quantization (PTQ/QAT), pruning, fusion, and optimized backends (TensorRT, FBGEMM).' },
        { id: 'q35', title: 'Quantization?', content: 'Static/PTQ or QAT; reduces size/latency; needs calibration; backend-dependent support (qnnpack/fbgemm).' },
        { id: 'q36', title: 'Distributed training?', content: 'torch.distributed (DDP) for multi-GPU/multi-node; use torchrun; set appropriate backend (nccl/gloo).' },
        { id: 'q37', title: 'Gradient checkpointing?', content: 'Use checkpointing for large models to reduce memory; increases compute cost; good for transformers.' },
        { id: 'q38', title: 'Serving options?', content: 'TorchServe, FastAPI + torch, ONNX Runtime, Triton; consider batch/streaming and GPU vs CPU.' },
        { id: 'q39', title: 'Export pitfalls?', content: 'Dynamic control flow may break in TorchScript/ONNX; ensure ops supported; set eval mode before export.' },
        { id: 'q40', title: 'Monitoring in prod?', content: 'Track latency, throughput, GPU utilization, drift, and model health; add tracing and structured logging.' }
      ]
    },
    {
      id: 'best',
      title: 'Best Practices and Troubleshooting',
      content: '',
      subsections: [
        { id: 'q41', title: 'Common errors?', content: 'CUDA out-of-memory, shape mismatches, device mismatch, inplace modification errors; check stack traces and tensor shapes.' },
        { id: 'q42', title: 'OOM handling?', content: 'Reduce batch size, clear cache, use torch.cuda.empty_cache(), gradient checkpointing, mixed precision, or CPU offload.' },
        { id: 'q43', title: 'Initialization?', content: 'Use kaiming/xavier for conv/linear; set biases appropriately; improper init can slow convergence.' },
        { id: 'q44', title: 'BatchNorm gotchas?', content: 'Switch to eval for inference; small batch sizes can destabilize stats—consider GroupNorm/LayerNorm.' },
        { id: 'q45', title: 'Reproducibility?', content: 'Set seeds, deterministic flags, disable nondeterministic algorithms; note reproducibility trade-offs with performance.' },
        { id: 'q46', title: 'Data pipelines?', content: 'Ensure workers not CPU-bound; use prefetch_factor, pin_memory, and correct num_workers for hardware.' },
        { id: 'q47', title: 'Label handling?', content: 'Use correct dtype (Long for CE), ensure class indices valid, and handle class imbalance with weighting or sampling.' },
        { id: 'q48', title: 'Checkpointing strategy?', content: 'Save best-by-metric and last; include optimizer/scheduler states; store config and RNG seeds.' },
        { id: 'q49', title: 'Debugging gradients?', content: 'Inspect .grad norms, use hooks, gradient clipping, anomaly detection (torch.autograd.set_detect_anomaly).' },
        { id: 'q50', title: 'Documentation and configs?', content: 'Track hyperparameters, code versions, data versions; use config files (YAML) and experiment tracking.' }
      ]
    }
  ]
};
