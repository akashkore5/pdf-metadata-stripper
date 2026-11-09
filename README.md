# @akashkore5/pdf-metadata-stripper

> Clean, scrub, and sanitize sensitive metadata from PDF documents directly in the browser or Node.js environment.

---

### 🌐 Live In-Browser Client-Side Tool
Looking for a quick, zero-upload tool to remove metadata from your files without installing software?
Try the live tool at **[EditPDFKit - Remove PDF Metadata](https://www.editpdfkit.com/tools/remove-metadata)**. 100% in-browser, zero telemetry, and files never leave your machine.

---

### Features
- 🛡️ Zero server dependencies: sanitize in memory
- ⚡ Strips Author, Title, Subject, Producer, CreationDate, and ModDate
- 🌐 Fully compatible with client-side WebAssembly and modern bundlers (Next.js, Vite, Webpack)

### Installation

```bash
npm install @akashkore5/pdf-metadata-stripper
```

### Usage

```javascript
const { sanitizeDocInfo, METADATA_KEYS_TO_SCRUB } = require('@akashkore5/pdf-metadata-stripper');

const rawMetadata = {
  Title: 'Confidential Strategy Q4',
  Author: 'Executive Team',
  Producer: 'Adobe PDF Library 15.0',
  CreationDate: 'D:20241010120000Z'
};

const cleanMetadata = sanitizeDocInfo(rawMetadata);
console.log(cleanMetadata);
// Output: {}
```

### License
MIT © [Akash Kore](https://github.com/akashkore5) • [EditPDFKit](https://www.editpdfkit.com)
