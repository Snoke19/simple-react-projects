import { drawText } from './utils/drawText';

const downloadImage = (containerRef) => {
    if (!containerRef?.current) {
        alert('Invalid container reference.');
        console.error('Invalid container reference.');
        return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const img = container.querySelector('#meme-image');
    if (!img) {
        alert('No image found in the container.');
        console.error('No image found in the container.');
        return;
    }

    const image = new Image();
    image.crossOrigin = 'Anonymous';

    image.onload = () => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        drawText(ctx, canvas, container, '#meme-text-top', 50);
        drawText(ctx, canvas, container, '#meme-text-bottom', canvas.height - 50);

        try {
            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'meme.png';
            link.click();
        } catch (error) {
            console.error('Failed to create or download image:', error);
        }
    };

    image.onerror = (error) => {
        console.error('Failed to load image:', error);
    };

    image.src = img.src;
};

export default downloadImage;