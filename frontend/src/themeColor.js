export const updateThemeColor = (color) => {
    document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
};