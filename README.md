# Todo App with Redux Toolkit and TypeScript

Dự án này là một ứng dụng Quản lý Công việc (Todo) được xây dựng bằng React, Redux Toolkit và TypeScript, với giao diện gọn gàng và tích hợp nhiều tính năng hữu ích.

## Features

- Tạo, xem, cập nhật và xoá công việc (todos)
- Đánh dấu công việc là đã hoàn thành hoặc đang hoạt động
- Lọc công việc theo trạng thái (tất cả, đang hoạt động, đã hoàn thành)
- Kéo và thả để sắp xếp lại thứ tự công việc
- Chế độ tối (Dark mode)
- Lưu dữ liệu bằng localStorage
- Giao diện responsive (tương thích trên nhiều thiết bị)
- Viết hoàn toàn bằng TypeScript

## Tech Stack

- React
- Redux Toolkit
- TypeScript
- Tailwind CSS
- React hello-pangea

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/dev-snake/TEST_FE.git
   cd TEST_FE
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

## Project Structure

- `src/components/` - React components
- `src/store/` - Redux store and slices
- `src/types/` - TypeScript type definitions
- `src/App.tsx` - Main application component
- `src/index.tsx` - Entry point

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
