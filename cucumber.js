module.exports = {
	default: {
		require: ["./tests/steps/*.ts"],
		format: ["progress", "json:reports/report.json"],
		parallel: 1,
		requireModule: ["ts-node/register"],
		paths: ["./tests/features/*.feature"]
	}
};
