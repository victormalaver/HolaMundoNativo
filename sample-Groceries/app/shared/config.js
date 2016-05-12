var miApiKey ="GWfRtXi1Lwt4jcqK";

var applicationSettingsModule = require("application-settings");

var configObject = {
	apiUrl: "https://api.everlive.com/v1/0t5e6c4t6wxd6aks/",
	invalidateToken: function() {
		this.token = "";
	}
};
Object.defineProperty(configObject, "token", {
	get: function() {
		return applicationSettingsModule.getString("token");
	},
	set: function(token) {
		return applicationSettingsModule.setString("token", token);
	}
});

module.exports = configObject;
