export const drawText = (ctx, canvas, container, selector, yOffset) => {
    const textElement = container.querySelector(selector);
    if (textElement) {
        ctx.font = '3.4em Impact, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'white';
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 5;

        ctx.fillText(textElement.innerText, canvas.width / 2, yOffset);
    }
};