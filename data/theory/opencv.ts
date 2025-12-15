import { TheoryTopic } from '@/types/theory';

export const opencvTheory: TheoryTopic = {
  topicId: 'opencv',
  topicName: 'OpenCV',
  category: 'Data & AI',
  description: 'OpenCV fundamentals, image processing, features, deep learning integration, and deployment practices.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Images',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is OpenCV?', content: 'A computer vision library providing image/video processing, feature detection, and ML/deep learning utilities.' },
        { id: 'q2', title: 'Image representation?', content: 'Images are matrices (H x W x C). In OpenCV (Python) default channel order is BGR, not RGB.' },
        { id: 'q3', title: 'Reading/writing images?', content: 'Use cv2.imread/cv2.imwrite; cv2.imshow for display (requires GUI); cv2.VideoCapture for camera/video.' },
        { id: 'q4', title: 'Color spaces?', content: 'Convert with cv2.cvtColor (BGR↔RGB, BGR↔GRAY, HSV, Lab, YCrCb). Choose spaces for segmentation/lighting robustness.' },
        { id: 'q5', title: 'Resizing and interpolation?', content: 'cv2.resize with INTER_NEAREST, LINEAR, CUBIC, AREA, LANCZOS. Choose based on scaling direction and quality.' },
        { id: 'q6', title: 'Blurring/denoising?', content: 'GaussianBlur, MedianBlur, BilateralFilter; choose based on noise type and edge preservation needs.' },
        { id: 'q7', title: 'Thresholding?', content: 'Global, adaptive, Otsu’s methods; used for segmentation/binarization. Apply after grayscale/blur.' },
        { id: 'q8', title: 'Morphology?', content: 'Erosion/dilation, opening/closing, gradient, top-hat/black-hat using structuring elements for shape operations.' },
        { id: 'q9', title: 'Geometric transforms?', content: 'Translation, rotation, scaling (warpAffine), perspective transforms (warpPerspective) using transformation matrices.' },
        { id: 'q10', title: 'Drawing utilities?', content: 'cv2.line, rectangle, circle, putText for annotations; useful for debugging and overlays.' }
      ]
    },
    {
      id: 'features',
      title: 'Features and Contours',
      content: '',
      subsections: [
        { id: 'q11', title: 'Edge detection?', content: 'Canny edge detector finds edges using gradients and hysteresis thresholds; sensitive to noise—blur first.' },
        { id: 'q12', title: 'Contours?', content: 'cv2.findContours extracts object outlines from binary images; use hierarchy for nested shapes; compute area/perimeter.' },
        { id: 'q13', title: 'Corner detection?', content: 'Harris and Shi-Tomasi (goodFeaturesToTrack) for corners; FAST for speed; refine with subpixel accuracy.' },
        { id: 'q14', title: 'Feature descriptors?', content: 'SIFT/SURF (patented historically), ORB/BRISK/AKAZE for keypoints and descriptors; used for matching and tracking.' },
        { id: 'q15', title: 'Feature matching?', content: 'BFMatcher or FLANN to match descriptors; use ratio test and RANSAC with homography to filter outliers.' },
        { id: 'q16', title: 'Hough transforms?', content: 'Detect lines (HoughLines/P) and circles (HoughCircles) in edge maps; tune thresholds carefully.' },
        { id: 'q17', title: 'Template matching?', content: 'Match small template in larger image with cv2.matchTemplate; sensitive to scale/rotation—use multi-scale if needed.' },
        { id: 'q18', title: 'Object tracking?', content: 'Trackers like KCF, CSRT, MOSSE; choose based on speed/accuracy; reinitialize on failure.' },
        { id: 'q19', title: 'Optical flow?', content: 'Lucas-Kanade (sparse) and Farnebäck (dense) estimate motion between frames; useful for tracking and stabilization.' },
        { id: 'q20', title: 'Camera calibration?', content: 'Use chessboard/aruco patterns; estimate intrinsic/extrinsic parameters; correct distortion with undistort.' }
      ]
    },
    {
      id: 'ml',
      title: 'Deep Learning and Detection',
      content: '',
      subsections: [
        { id: 'q21', title: 'DNN module?', content: 'cv2.dnn loads models (Caffe, ONNX, TensorFlow, Darknet). Run forward passes for inference on images.' },
        { id: 'q22', title: 'Pre/post-processing?', content: 'Resize/normalize channels, set input blob (blobFromImage), then decode outputs; apply NMS for detections.' },
        { id: 'q23', title: 'Popular models?', content: 'YOLO, SSD, Faster R-CNN, MobileNet-based nets. Export to ONNX for compatibility.' },
        { id: 'q24', title: 'Performance tips?', content: 'Use preferable backend/target (OpenVINO, CUDA, TensorRT where built); use smaller models; batch when possible.' },
        { id: 'q25', title: 'Segmentation?', content: 'Use DeepLab/UNet models; postprocess masks; apply morphological ops to clean predictions.' },
        { id: 'q26', title: 'Pose estimation?', content: 'Models like OpenPose/MoveNet; parse keypoints; handle scaling and person association.' },
        { id: 'q27', title: 'Tracking with detections?', content: 'Combine detection + tracker (SORT/DeepSORT/ByteTrack) for multi-object tracking across frames.' },
        { id: 'q28', title: 'ONNX export?', content: 'Export PyTorch/TF models to ONNX; ensure supported ops; simplify model; set dynamic axes for variable sizes.' },
        { id: 'q29', title: 'Quantization?', content: 'Use INT8/FP16 models for speed on supported backends; calibrate for accuracy; check backend support.' },
        { id: 'q30', title: 'Batch processing?', content: 'Process frames in batches when latency allows; avoid excessive copies; pre-allocate buffers.' }
      ]
    },
    {
      id: 'geometry',
      title: 'Geometry, Segmentation, and 3D',
      content: '',
      subsections: [
        { id: 'q31', title: 'Perspective transforms?', content: 'Compute homography with point correspondences; warp images for rectification or bird’s-eye views.' },
        { id: 'q32', title: 'Stereo vision?', content: 'Calibrate stereo cameras, rectify, compute disparity maps, convert to depth with Q matrix.' },
        { id: 'q33', title: 'Segmentation methods?', content: 'Watershed, grabCut for interactive segmentation; k-means for color clustering; use morphology to refine masks.' },
        { id: 'q34', title: 'Background subtraction?', content: 'MOG2/KNN subtractors for motion detection; tune learning rates; handle shadows carefully.' },
        { id: 'q35', title: 'Contours to shapes?', content: 'Approximate polygons (approxPolyDP), compute bounding boxes/minAreaRect, convex hull/defects.' },
        { id: 'q36', title: 'Line/plane fitting?', content: 'Use Hough or RANSAC for line/plane fitting; filter outliers before fitting.' },
        { id: 'q37', title: 'Image pyramids?', content: 'Gaussian/Laplacian pyramids for multi-scale processing, blending, and detection robustness.' },
        { id: 'q38', title: 'HDR and blending?', content: 'Merge exposures, tone mapping; seamless cloning/Poisson blending for composites.' },
        { id: 'q39', title: 'ArUco markers?', content: 'Detect fiducials for pose estimation; calibrate camera; use drawDetectedMarkers for debugging.' },
        { id: 'q40', title: '3D reconstruction?', content: 'Structure-from-motion pipelines need feature matching, camera poses, and triangulation; OpenCV provides partial tools.' }
      ]
    },
    {
      id: 'best',
      title: 'Performance and Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'Performance bottlenecks?', content: 'Frequent conversions between PIL/NumPy/OpenCV; copies between CPU/GPU; use in-place ops and pre-allocation.' },
        { id: 'q42', title: 'Color order pitfalls?', content: 'Remember OpenCV uses BGR; convert to RGB when mixing with libraries expecting RGB (matplotlib, PIL).' },
        { id: 'q43', title: 'Threading?', content: 'OpenCV uses TBB/OMP; setNumThreads to tune; avoid Python GIL bottlenecks by vectorizing or using multiprocessing.' },
        { id: 'q44', title: 'Image normalization?', content: 'Standardize scale (0-1) or mean/std; match training pre-processing for ML models; avoid uint8 overflow.' },
        { id: 'q45', title: 'Coordinate systems?', content: 'Origin at top-left; x to right, y down. Keep consistent when overlaying detections and labels.' },
        { id: 'q46', title: 'Serialization?', content: 'Save arrays with cv2.imwrite or np.save; store calibration results (intrinsics/distortion) to reuse.' },
        { id: 'q47', title: 'Testing?', content: 'Use golden images, checksum of outputs, and property-based tests for invariants (e.g., idempotence of conversions).' },
        { id: 'q48', title: 'Deployment?', content: 'Build OpenCV with needed modules only; use wheels with contrib if needed; consider size/performance trade-offs.' },
        { id: 'q49', title: 'Licensing?', content: 'Core is BSD; some patented algorithms historically in contrib/nonfree—verify licensing for commercial use.' },
        { id: 'q50', title: 'Debugging visuals?', content: 'Overlay intermediate results, draw bounding boxes/contours, use imshow or write frames to video for inspection.' }
      ]
    }
  ]
};
