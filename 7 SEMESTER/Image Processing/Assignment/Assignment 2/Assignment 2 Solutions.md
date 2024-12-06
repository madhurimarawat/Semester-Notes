<div style = 'text-align:center; font-size: 15pt; color: #00B050'>
<h1> Author: Madhurima Rawat</h1>
  </div>

<div style="text-align: center; font-size: 14pt; color: #00B050">
  <h1>Assignment 2</h1>
  </div>
  
<div style="font-size: 13pt; color: #00B050">
<h3>Question 1: Describe the various image restoration techniques?</h3>
</div>

<div style="font-size: 12pt; color: #00B050">
<h3> Solution: Image Restoration Techniques</h3>
</div>

### Table of Contents

1. [Introduction to Image Restoration](#1-introduction-to-image-restoration)
2. [Types of Degradation in Images](#2-types-of-degradation-in-images)
3. [Key Image Restoration Techniques](#3-key-image-restoration-techniques)
   - 3.1. [Inverse Filtering](#31-inverse-filtering)
   - 3.2. [Wiener Filtering](#32-wiener-filtering)
   - 3.3. [Constrained Least Squares Filtering](#33-constrained-least-squares-filtering)
   - 3.4. [Iterative Restoration Techniques](#34-iterative-restoration-techniques)
   - 3.5. [Blind Deconvolution](#35-blind-deconvolution)
4. [Flowchart of Image Restoration Techniques](#4-flowchart-of-image-restoration-techniques)
5. [Detailed Description of Techniques](#5-detailed-description-of-techniques)
6. [Conclusion](#6-conclusion)
7. [Summary Table of Frequency Domain Filtering Techniques](#7-summary-table-of-frequency-domain-filtering-techniques)

---

### 1. [Introduction to Image Restoration](#1-introduction-to-image-restoration)

Image restoration refers to the process of recovering a degraded image to its original state. Unlike enhancement, which aims to improve image aesthetics, restoration focuses on removing known degradations like noise, blur, and motion artifacts. Restoration techniques rely on mathematical models of degradation and attempt to reverse these effects.

---

### 2. [Types of Degradation in Images](#2-types-of-degradation-in-images)

Images can be degraded due to various reasons like noise, motion blur, atmospheric disturbance, or sensor defects. Common degradations include:

- **Noise** (Gaussian, Salt-and-Pepper, etc.)
- **Blur** (caused by camera movement, lens imperfections, or object motion)
- **Low resolution** (due to poor quality sensors or sampling)

---

### 3. [Key Image Restoration Techniques](#3-key-image-restoration-techniques)

#### 3.1. [Inverse Filtering](#31-inverse-filtering)

Inverse filtering attempts to reverse the degradation process by applying the inverse of the degradation function to the degraded image. It is simple but highly sensitive to noise.

#### 3.2. [Wiener Filtering](#32-wiener-filtering)

Wiener filtering is an optimal approach for image restoration in the presence of noise. It minimizes the mean square error between the restored and the original image by taking both degradation and noise into account.

#### 3.3. [Constrained Least Squares Filtering](#33-constrained-least-squares-filtering)

This technique adds a constraint to the restoration process, ensuring smoothness in the restored image. It balances noise suppression and the preservation of image details.

#### 3.4. [Iterative Restoration Techniques](#34-iterative-restoration-techniques)

These techniques gradually improve the image over several iterations, refining the estimate of the original image. Methods such as the Richardson-Lucy algorithm fall under this category.

#### 3.5. [Blind Deconvolution](#35-blind-deconvolution)

Blind deconvolution is used when the degradation function is not known. It simultaneously estimates the original image and the degradation function, making it highly effective but computationally intensive.

---

### 4. [Flowchart of Image Restoration Techniques](#4-flowchart-of-image-restoration-techniques)

```plaintext
┌──────────────────────────────────────────┐
│ Start                                    │
├──────────────────────────────────────────┤
│ Read Degraded Image                      │
├──────────────────────────────────────────┤
│ Identify Degradation Model               │
├─────────────┬─────────────┬──────────────┤
│             │             │              │
▼             ▼             ▼              ▼
Inverse    Wiener       Constrained    Iterative/Blind
Filtering  Filtering    Least Squares  Deconvolution
│             │             │              │
▼             ▼             ▼              ▼
Restored    Noise-Reduced  Smooth Image  Enhanced with Iterations
Image       Image          with Details  or Blind Estimation
├──────────────────────────────────────────┤
│ Display Restored Image                   │
├──────────────────────────────────────────┤
│ End                                      │
└──────────────────────────────────────────┘
```

---

### 5. [Detailed Description of Techniques](#5-detailed-description-of-techniques)

- **Inverse Filtering**: This is the simplest restoration technique. The degraded image is restored by applying the inverse of the degradation function H(u, v). However, it is highly sensitive to noise, making it impractical in many cases.

  The relationship between the original image F(u, v) and the degraded image G(u, v) is:

  G(u, v) = F(u, v) \* H(u, v)

  To retrieve F(u, v), inverse filtering applies:

  F(u, v) = G(u, v) / H(u, v)

- **Wiener Filtering**: This technique accounts for both degradation and noise. It minimizes the mean square error between the restored and original images. The Wiener filter formula is:

  H_Wiener(u, v) = H\*(u, v) / (|H(u, v)|^2 + (S_n(u, v) / S_f(u, v)))

  Where:

  - H\*(u, v) is the complex conjugate of the degradation function.
  - |H(u, v)|^2 is the magnitude squared of the degradation function.
  - S_n(u, v) is the power spectrum of the noise.
  - S_f(u, v) is the power spectrum of the original image.

- **Constrained Least Squares Filtering**: This technique involves minimizing a cost function that includes a regularization term. It ensures that the solution is not only close to the observed image but also smooth.

  The cost function can be expressed as:

  Minimize || H _ F_restored - G ||^2 + λ || L _ F_restored ||^2

  Where:

  - H is the degradation function.
  - F_restored is the restored image.
  - G is the degraded image.
  - L is a regularization operator (often a derivative operator).
  - λ is a regularization parameter balancing fidelity and smoothness.

- **Iterative Restoration Techniques**: These methods restore the image gradually by refining the estimate at each iteration. The Richardson-Lucy algorithm is an example, commonly used in astronomical imaging.

- **Blind Deconvolution**: Blind deconvolution doesn’t require prior knowledge of the degradation function. It estimates both the original image and the degradation function iteratively, making it a powerful but computationally demanding technique.

---

### 6. [Conclusion](#6-conclusion)

Image restoration techniques aim to recover a degraded image based on mathematical models of the degradation. Each technique, from simple inverse filtering to complex blind deconvolution, has its specific applications and limitations. Understanding the type of degradation is key to selecting the most appropriate restoration method.

<div style="font-size: 13pt; color: #00B050">
<h3>Question 2: Explain spatial domain image enhancement techniques?</h3>
</div>

<div style="font-size: 12pt; color: #00B050">
<h3>Solution: Spatial Domain Image Enhancement</h3>
</div>

### Table of Contents

1. [Introduction to Spatial Domain Image Enhancement](#1-introduction-to-spatial-domain-image-enhancement)
2. [Spatial Domain Techniques Overview](#2-spatial-domain-techniques-overview)
3. [Key Techniques in Spatial Domain Image Enhancement](#3-key-techniques-in-spatial-domain-image-enhancement)
   - 3.1. [Image Negatives](#31-image-negatives)
   - 3.2. [Logarithmic Transformations](#32-logarithmic-transformations)
   - 3.3. [Power-Law (Gamma) Transformations](#33-power-law-gamma-transformations)
   - 3.4. [Histogram Equalization](#34-histogram-equalization)
   - 3.5. [Spatial Filtering](#35-spatial-filtering)
4. [Flowchart of Spatial Domain Techniques](#4-flowchart-of-spatial-domain-techniques)
5. [Detailed Description of Techniques](#5-detailed-description-of-techniques)
6. [Conclusion](#6-conclusion)

---

### 1. [Introduction to Spatial Domain Image Enhancement](#1-introduction-to-spatial-domain-image-enhancement)

Spatial domain image enhancement refers to modifying the pixel values of an image directly. The enhancement aims to improve the visual quality of images by altering brightness, contrast, sharpness, etc. The spatial domain operates on the image’s individual pixels, manipulating them for different visual effects.

---

### 2. [Spatial Domain Techniques Overview](#2-spatial-domain-techniques-overview)

The primary goal of spatial domain enhancement is to apply operations to pixels to achieve desirable visual results. It includes point processing, where pixel values are changed independently, and spatial filtering, which involves the neighboring pixel values.

---

### 3. [Key Techniques in Spatial Domain Image Enhancement](#3-key-techniques-in-spatial-domain-image-enhancement)

#### 3.1. [Image Negatives](#31-image-negatives)

This technique reverses the intensity levels of an image, producing a negative. It is mainly used in medical imaging to highlight subtle features.

#### 3.2. [Logarithmic Transformations](#32-logarithmic-transformations)

Log transformations are useful for enhancing images with large variations in pixel intensities. They expand the darker pixel values and compress brighter values.

#### 3.3. [Power-Law (Gamma) Transformations](#33-power-law-gamma-transformations)

This method adjusts the contrast of an image by applying a gamma correction. Varying the gamma value enhances different details of the image. A gamma value greater than 1 darkens the image, while a value less than 1 brightens it.

#### 3.4. [Histogram Equalization](#34-histogram-equalization)

This technique is widely used to improve the contrast of an image by redistributing the intensity values. It spreads out the most frequent intensity values, leading to a better contrast image.

#### 3.5. [Spatial Filtering](#35-spatial-filtering)

Spatial filtering involves the use of masks or filters that modify pixel values based on the surrounding pixels. Filters like sharpening and smoothing enhance edges or reduce noise, respectively.

---

### 4. [Flowchart of Spatial Domain Techniques](#4-flowchart-of-spatial-domain-techniques)

```plaintext
┌──────────────────────────────────────────┐
│ Start                                    │
├──────────────────────────────────────────┤
│ Read Input Image                         │
├──────────────────────────────────────────┤
│ Choose Enhancement Technique             │
├─────────────┬─────────────┬──────────────┤
│             │             │              │
▼             ▼             ▼              ▼
Logarithmic  Power-Law    Histogram    Spatial Filtering
Transform     Transform   Equalization
│             │             │              │
▼             ▼             ▼              ▼
Modified     Adjusted      Enhanced     Enhanced with
Pixels       Brightness    Contrast     Filter
├──────────────────────────────────────────┤
│ Display Enhanced Image                   │
├──────────────────────────────────────────┤
│ End                                      │
└──────────────────────────────────────────┘
```

---

### 5. [Detailed Description of Techniques](#5-detailed-description-of-techniques)

- **Image Negatives**: The transformation is achieved by inverting the pixel values using the equation:

  ```
  s = L - 1 - r
  ```

  where `r` is the input pixel, `s` is the output pixel, and `L` is the number of intensity levels.

- **Logarithmic Transformations**: Log transformations can be mathematically expressed as:

  ```
  s = c * log(1 + r)
  ```

  where `r` is the pixel value, and `c` is a constant. This is useful for enhancing details in darker regions.

- **Power-Law (Gamma) Transformations**: The power-law transformation is described by:

  ```
  s = c * r^gamma
  ```

  where `c` and `gamma` are positive constants. This is used for varying the contrast of images based on different gamma values.

- **Histogram Equalization**: This technique redistributes the intensity values of the image so that the histogram of the output image is more uniformly spread. It’s expressed as:

  ```
  s = T(r) = integral from 0 to r of p(r') dr'
  ```

  where `p(r')` is the probability density function of intensity levels in the image.

- **Spatial Filtering**: This technique applies a convolutional mask to the image for enhancing specific image features like edges. For instance, a sharpening filter highlights edges and fine details in the image, while a smoothing filter reduces noise.

---

### 6. [Conclusion](#6-conclusion)

Spatial domain techniques are powerful tools in image enhancement, offering methods to directly manipulate pixel values for improved visual effects. Whether the goal is contrast enhancement, brightness adjustment, or noise reduction, these techniques play a crucial role in image processing.

---

<div style="font-size: 13pt; color: #00B050">
<h3> Question 3: Describe the filtering in the frequency domain?</h3>
</div>

<div style="font-size: 12pt; color: #00B050">
<h3> Solution: Frequency Domain Filtering</h3>
</div>

### Table of Contents

1. [Introduction to Frequency Domain Filtering](#1-introduction-to-frequency-domain-filtering)
2. [Basic Concepts of Frequency Domain](#2-basic-concepts-of-frequency-domain)
3. [Key Frequency Domain Filtering Techniques](#3-key-frequency-domain-filtering-techniques)
   - 3.1. [Low-Pass Filtering](#31-low-pass-filtering)
   - 3.2. [High-Pass Filtering](#32-high-pass-filtering)
   - 3.3. [Band-Pass Filtering](#33-band-pass-filtering)
   - 3.4. [Band-Stop Filtering](#34-band-stop-filtering)
4. [Flowchart of Frequency Domain Filtering](#4-flowchart-of-frequency-domain-filtering)
5. [Detailed Description of Techniques](#5-detailed-description-of-techniques)
6. [Conclusion](#6-conclusion)
7. [Summary Table of Frequency Domain Filtering Techniques](#7-summary-table-of-frequency-domain-filtering-techniques)

---

### 1. [Introduction to Frequency Domain Filtering](#1-introduction-to-frequency-domain-filtering)

Filtering in the frequency domain involves transforming the image into its frequency components using techniques like the Fourier transform, applying a filter in the frequency domain, and then transforming it back into the spatial domain. This approach is particularly useful for tasks like noise reduction, edge detection, and image sharpening.

---

### 2. Basic Concepts of Frequency Domain

In the frequency domain, an image is represented by sine and cosine components, which describe the intensity variation across the image. The Fourier transform converts the spatial domain into the frequency domain for easier manipulation of frequency components.

The Fourier transform equation for an image is:

F(u, v) = ∑ (x=0 to M-1) ∑ (y=0 to N-1) f(x, y) \* e^ (-2πj \_ (ux/M + vy/N))

Where f(x, y) is the spatial domain image and F(u, v) is its frequency domain representation.

---

### 3. [Key Frequency Domain Filtering Techniques](#3-key-frequency-domain-filtering-techniques)

#### 3.1. [Low-Pass Filtering](#31-low-pass-filtering)

Low-pass filters allow low-frequency components (smooth areas) to pass through while blocking high-frequency components (edges and noise). This type of filtering is typically used for noise reduction and image smoothing.

#### 3.2. [High-Pass Filtering](#32-high-pass-filtering)

High-pass filters allow high-frequency components (edges and fine details) to pass while blocking low-frequency components. It is often used to enhance edges and details in an image.

#### 3.3. [Band-Pass Filtering](#33-band-pass-filtering)

Band-pass filters allow a specific range of frequency components to pass while blocking frequencies outside this range. This is useful when only a certain frequency band is of interest.

#### 3.4. [Band-Stop Filtering](#34-band-stop-filtering)

Band-stop filters block a specific range of frequencies while allowing others to pass. This is used when certain frequencies, such as noise at a particular frequency, need to be removed.

---

### 4. [Flowchart of Frequency Domain Filtering](#4-flowchart-of-frequency-domain-filtering)

```plaintext
┌──────────────────────────────────────────┐
│ Start                                    │
├──────────────────────────────────────────┤
│ Read Input Image                         │
├──────────────────────────────────────────┤
│ Apply Fourier Transform                  │
├──────────────────────────────────────────┤
│ Choose Filtering Technique               │
├─────────────┬─────────────┬──────────────┤
│             │             │              │
▼             ▼             ▼              ▼
Low-Pass    High-Pass     Band-Pass     Band-Stop
Filter      Filter        Filter        Filter
│             │             │              │
▼             ▼             ▼              ▼
Filtered     Enhanced      Specific      Specific
Image        Edges         Band         Frequencies
├──────────────────────────────────────────┤
│ Apply Inverse Fourier Transform           │
├──────────────────────────────────────────┤
│ Display Filtered Image                    │
├──────────────────────────────────────────┤
│ End                                      │
└──────────────────────────────────────────┘
```

---

### 5. [Detailed Description of Techniques](#5-detailed-description-of-techniques)

- **Low-Pass Filtering**: Low-pass filters remove high-frequency components that represent noise and sharp edges. The filtered image appears smoother because only low-frequency signals are retained. The filter function in the frequency domain is usually a Gaussian or ideal filter.
- **High-Pass Filtering**: High-pass filters remove low-frequency components, highlighting high-frequency details like edges. The result is a sharper image with enhanced edges and fine details. The filter function is often designed to attenuate low frequencies while amplifying high frequencies.
- **Band-Pass Filtering**: A band-pass filter allows frequencies within a certain range to pass while blocking frequencies outside this range. This is especially useful when an image contains useful information at a particular frequency band.
- **Band-Stop Filtering**: The opposite of band-pass filtering, band-stop filters block frequencies within a specific range while passing all others. This is helpful for removing specific types of noise without affecting the rest of the image.

---

### 6. [Conclusion](#6-conclusion)

Filtering in the frequency domain is a powerful tool for image processing, allowing selective manipulation of frequency components. By applying different types of filters, such as low-pass, high-pass, band-pass, and band-stop, we can achieve various objectives like noise reduction, edge enhancement, and the removal of specific frequencies. Understanding the frequency content of an image helps in selecting the right filter for the desired outcome.

---

### 7. [Summary Table of Frequency Domain Filtering Techniques](#7-summary-table-of-frequency-domain-filtering-techniques)

1. **Low-Pass Filter**

   - **Example Algorithms**:
     - **Gaussian Blur**: Uses a Gaussian function to create a low-pass filter that smooths the image by reducing high-frequency content.
     - **Butterworth Low-Pass Filter**: Provides a smoother transition between passed and blocked frequencies compared to the ideal filter.
   - **Effect**:
     - Smooths the image by averaging pixel values, thereby reducing noise and minor variations.
   - **Applications**:
     - **Medical Imaging**: Enhances the visibility of anatomical structures by reducing noise.
     - **Photography**: Softens images to achieve a particular aesthetic.
     - **Remote Sensing**: Filters out high-frequency noise from satellite images.

2. **High-Pass Filter**

   - **Example Algorithms**:
     - **Laplacian Filter**: Detects edges by calculating the second derivative of the image intensity.
     - **Sobel Filter**: Emphasizes edges in specific directions by calculating the gradient.
     - **High-Boost Filtering**: Enhances details by adding a scaled version of the high-pass filtered image to the original image.
   - **Effect**:
     - Highlights edges and fine details, making transitions between different regions more pronounced.
   - **Applications**:
     - **Feature Detection**: Identifies important features within an image for further processing.
     - **Image Sharpening**: Enhances the clarity and definition of images.
     - **Security Systems**: Improves the detection of objects and movements.

3. **Band-Pass Filter**

   - **Example Algorithms**:
     - **Gabor Filters**: Combines Gaussian filtering with sinusoidal waveforms to capture specific frequency and orientation information.
     - **Band-Pass Butterworth Filter**: Allows a specific range of frequencies to pass while attenuating others with a Butterworth response.
   - **Effect**:
     - Isolates and emphasizes particular frequency ranges, enabling the extraction of specific features.
   - **Applications**:
     - **Texture Analysis**: Identifies and analyzes texture patterns within images.
     - **Pattern Recognition**: Facilitates the recognition of specific patterns based on their frequency characteristics.
     - **Signal Processing**: Filters signals to retain desired frequency components for analysis.

4. **Band-Stop Filter**
   - **Example Algorithms**:
     - **Notch Filters**: Specifically designed to eliminate narrow frequency bands, often used to remove power line interference.
     - **Band-Stop Butterworth Filter**: Blocks a specific range of frequencies with a Butterworth response while allowing others to pass.
   - **Effect**:
     - Removes unwanted frequency components without significantly affecting the rest of the image.
   - **Applications**:
     - **Noise Reduction**: Eliminates specific types of noise, such as periodic interference, without degrading the overall image quality.
     - **Audio Processing**: Removes specific frequency bands from audio signals to enhance sound quality.
     - **Communication Systems**: Filters out unwanted frequency bands to improve signal clarity and reduce interference.

| **Filtering Technique** | **Purpose**                                           | **Frequency Components**               | **Common Uses**                       | **Example Algorithms**                               | **Effect**                             | **Applications**                                         |
| ----------------------- | ----------------------------------------------------- | -------------------------------------- | ------------------------------------- | ---------------------------------------------------- | -------------------------------------- | -------------------------------------------------------- |
| **Low-Pass Filter**     | Allows low frequencies to pass, blocks high           | Passes low-frequency (smooth areas)    | Noise reduction, image smoothing      | Gaussian Blur, Butterworth Low-Pass Filter           | Smooths the image, reduces noise       | Medical imaging, Photography, Remote sensing             |
| **High-Pass Filter**    | Allows high frequencies to pass, blocks low           | Passes high-frequency (edges, details) | Edge enhancement, detail enhancement  | Laplacian Filter, Sobel Filter, High-Boost Filtering | Enhances edges and fine details        | Feature detection, Image sharpening, Security systems    |
| **Band-Pass Filter**    | Allows a specific range of frequencies to pass        | Passes a specific frequency band       | Isolating particular frequency ranges | Gabor Filters, Band-Pass Butterworth Filter          | Isolates specific frequency components | Texture analysis, Pattern recognition, Signal processing |
| **Band-Stop Filter**    | Blocks a specific range of frequencies, passes others | Blocks a specific frequency band       | Removing specific noise frequencies   | Notch Filters, Band-Stop Butterworth Filter          | Removes targeted frequency components  | Noise reduction, Audio processing, Communication systems |
