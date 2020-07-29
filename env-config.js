const isProd = process.env.NODE_ENV === "production";

module.exports = {
    // Not required when using CNAME
	// "process.env.BACKEND_URL": isProd ? "/blog" : "/blog",
};
