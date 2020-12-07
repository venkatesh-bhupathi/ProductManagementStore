"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
var DEFAULT_MONGO_SERVER = "localhost";
var DEFAULT_MONGO_PORT = 27017;
var DEFAULT_MONGO_DB = "reacttrainingdb";
var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    Configuration.getConfiguration = function () {
        var connectionString = process.env.MONGO_CONNECTION_STRING;
        if (!connectionString) {
            var mongoServer = process.env.MONGO_SERVER || DEFAULT_MONGO_SERVER;
            var mongoPort = process.env.MONGO_PORT || DEFAULT_MONGO_PORT;
            var mongoDbName = process.env.MONGO_DB || DEFAULT_MONGO_DB;
            connectionString = "mongodb://" + mongoServer + ":" + mongoPort + "/" + mongoDbName;
        }
        var settings = {
            getConnectionString: function () { return connectionString; }
        };
        return settings;
    };
    return Configuration;
}());
exports.Configuration = Configuration;
