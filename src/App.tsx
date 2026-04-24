/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:category" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}
