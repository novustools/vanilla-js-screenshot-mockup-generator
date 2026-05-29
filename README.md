# Vanilla JS Screenshot Mockup Dimensions Logic

This repository contains the core, dependency-free JavaScript mathematical logic for calculating device frames (macOS, Windows, iPhone, Android), aspect ratios, and padding dimensions for screenshot mockups.

Built for developers creating automated screenshot micro-services, headless Chrome wrappers, or server-side image processors who need exact coordinate math without loading heavy Canvas/DOM libraries.

For the full, interactive browser tool with drag-and-drop Canvas rendering, custom gradients, and 3D shadows, visit the [NovusTools Screenshot Mockup Generator](https://novustools.com/screenshot-mockup-generator/).

## Platform-Specific Mockup Generators
Optimize your visual assets for specific platforms using our dedicated modules:
* [SaaS Landing Page Screenshot Generator](https://novustools.com/saas-screenshot-generator/)
* [Product Hunt Screenshot Generator](https://novustools.com/producthunt-screenshot-generator/)
* [Twitter/X Screenshot Generator](https://novustools.com/twitter-screenshot-generator/)
* [LinkedIn Screenshot Generator](https://novustools.com/linkedin-screenshot-generator/)
* [App Store Screenshot Generator](https://novustools.com/app-store-screenshot-generator/)

## Usage
Simply pass your original image dimensions, target device type, and desired padding. The function returns a JSON object containing the exact bounding boxes, frame sizes, and image offset coordinates needed to draw the perfect mockup.
