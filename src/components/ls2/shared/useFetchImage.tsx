import {useState, useEffect} from 'react';
/**
 * Copyright (c) 2020 Eyk Rehbein
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

type Props = {
  hasLoaded: boolean;
  hasError: boolean;
  hasStartedInitialFetch: boolean;
};

/**
 * Loads the image into the cache or retrieves it from the cache
 * if it has already been loaded.
 * @param src
 */
export const useFetchImage = (src: string): Props => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasStartedInitialFetch, setHasStartedInitialFetch] = useState(false);

  useEffect(() => {
    setHasStartedInitialFetch(true);
    setHasLoaded(false);
    setHasError(false);

    const image: HTMLImageElement = new Image();
    image.src = src;

    const handleError = (): void => {
      setHasError(true);
    };
    const handleLoad = (): void => {
      setHasLoaded(true);
      setHasError(false);
    };
    image.onerror = handleError;
    image.onload = handleLoad;

    return () => {
      image.removeEventListener('error', handleError);
      image.removeEventListener('load', handleLoad);
    };
  }, [src]);

  return {hasLoaded, hasError, hasStartedInitialFetch};
};
