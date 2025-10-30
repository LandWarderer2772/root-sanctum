# Cryptography

### Overview

Cryptography ensures secure communication and data protection.

### Encryption Methods

#### Symmetric Encryption
- **Definition**: Uses same key for encryption and decryption
- **Common Algorithms**:
  - AES (128/256-bit)
  - DES/3DES (legacy)
  - ChaCha20
- **Use Cases**: File encryption, secure communications
- **Advantages**: Fast, efficient for large data
- **Disadvantages**: Key distribution challenges

::: tip Pro Tip
AES-256 is the current industry standard for symmetric encryption.
:::

#### Asymmetric Encryption
- **Definition**: Uses public/private key pairs
- **Common Algorithms**:
  - RSA (2048/4096-bit)
  - ECC (Elliptic Curve)
  - DSA (Digital Signature)
- **Use Cases**: Digital signatures, key exchange
- **Advantages**: Secure key exchange, digital signatures
- **Disadvantages**: Slower than symmetric encryption

#### Hashing
- **Common Algorithms**:
  - SHA-256/512
  - Blake2/Blake3
  - Argon2 (password hashing)
- **Use Cases**: Password storage, integrity verification
- **Properties**:
  - One-way function
  - Deterministic
  - Avalanche effect

---
