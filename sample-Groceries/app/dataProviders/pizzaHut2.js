var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    appId: 'hkj4fc5x9m0i39pd',
    scheme: 'https'
});

// START_CUSTOM_CODE_pizzaHut2
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_pizzaHut2
module.exports = provider;