/**
 * NovusTools - Vanilla JS Mockup Dimensions Calculator
 * Calculates canvas sizes, frame boundaries, and image scaling/offsets for device mockups.
 */

function calculateMockupDimensions(imageWidth, imageHeight, deviceType = 'macOS', padding = 50) {
    let screenW = imageWidth;
    let screenH = imageHeight;
    let frameW, frameH, screenOffsetX, screenOffsetY;
    let imgScale = 1;

    // Desktop UI Header allowance (for window buttons)
    const desktopHeaderH = 40;

    if (deviceType === 'macOS' || deviceType === 'Windows') {
        // Enforce 16:9 Aspect Ratio
        screenH = screenW * (9 / 16);
        frameW = screenW;
        frameH = screenH + desktopHeaderH;
        screenOffsetX = 0;
        screenOffsetY = desktopHeaderH;
        imgScale = Math.max(screenW / imageWidth, screenH / imageHeight);

    } else if (deviceType === 'iPhone' || deviceType === 'Android') {
        // Enforce Mobile Aspect Ratios (19.5:9 for iOS, 20:9 for Android)
        screenH = screenW * (deviceType === 'iPhone' ? 19.5 / 9 : 20 / 9);
        const bezel = Math.max(12, screenW * 0.035);
        
        frameW = screenW + (bezel * 2);
        frameH = screenH + (bezel * 2);
        screenOffsetX = bezel;
        screenOffsetY = bezel;
        imgScale = Math.max(screenW / imageWidth, screenH / imageHeight);

    } else {
        // 'none' or raw image
        frameW = screenW;
        frameH = screenH;
        screenOffsetX = 0;
        screenOffsetY = 0;
    }

    // Image Offsets to Center/Crop within the Virtual Screen
    const imgOffsetX = (screenW - (imageWidth * imgScale)) / 2;
    const imgOffsetY = (screenH - (imageHeight * imgScale)) / 2;

    // Final Total Canvas Size
    const totalCanvasWidth = frameW + (padding * 2);
    const totalCanvasHeight = frameH + (padding * 2);

    return {
        deviceParams: {
            type: deviceType,
            targetAspectRatio: (screenW / screenH).toFixed(4)
        },
        canvasDimensions: {
            totalWidth: totalCanvasWidth,
            totalHeight: totalCanvasHeight,
            padding: padding
        },
        frameCoordinates: {
            width: frameW,
            height: frameH,
            x: padding,
            y: padding
        },
        screenCoordinates: {
            width: screenW,
            height: screenH,
            x: padding + screenOffsetX,
            y: padding + screenOffsetY
        },
        imageDrawParams: {
            scale: imgScale,
            drawWidth: imageWidth * imgScale,
            drawHeight: imageHeight * imgScale,
            offsetX: padding + screenOffsetX + imgOffsetX,
            offsetY: padding + screenOffsetY + imgOffsetY
        }
    };
}

// Example Usage:
// const renderData = calculateMockupDimensions(1920, 1080, 'iPhone', 60);
// console.log(renderData);
