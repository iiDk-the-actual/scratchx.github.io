(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Functions for block with type 'w' will get a callback function as the 
    // final argument. This should be called to indicate that the block can
    // stop waiting.
    ext.wait_random = function(callback) {
        wait = Math.random();
        console.log('Waiting for ' + wait + ' seconds');
        window.setTimeout(function() {
            callback();
        }, wait*1000);
    };
ext.javascript = function(scr) {
        eval(scr);
    };
ext.redirect = function(html) {
        eval('window.location.replace(html);');
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['w', 'wait for random time', 'wait_random'],
            ['w', 'javascript %s', 'javascript', 'alert()'],
            ['w', 'redirect %s', 'redirect', 'https://www.google.com'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Grayson's Blocks', descriptor, ext);
})({});