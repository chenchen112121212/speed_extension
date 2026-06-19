(function() {
    // 避免重复注入
    if (window.__ccbSpeedControl) return;

    // 获取当前页面的视频元素（支持多个，但通常只有一个）
    function getVideoElement() {
        // 尝试多种选择器
        let video = document.querySelector('video');
        if (!video) {
            // 若视频在shadow DOM或iframe中，可在此添加递归查找逻辑
            // 这里仅作简单示例
        }
        return video;
    }

    const speedControl = {
        setSpeed(speed) {
            const video = getVideoElement();
            if (video) {
                video.playbackRate = parseFloat(speed);
                console.log(`[CCB Speed] 速度设置为 ${speed}x`);
                return true;
            } else {
                console.warn('[CCB Speed] 未找到视频元素');
                return false;
            }
        },
        getSpeed() {
            const video = getVideoElement();
            return video ? video.playbackRate : null;
        },
        // 可选：增加自动记忆速度功能
    };

    window.__ccbSpeedControl = speedControl;

    // 可选：页面加载完成后自动设置默认速度（可由脚本调用，也可以在这里直接设置）
    // 这里不自动设置，等待脚本调用
})();