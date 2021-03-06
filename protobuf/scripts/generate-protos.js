const ChildProcess = require('child_process'),
	FS = require('fs'),
	Path = require('path')

const PBJS_BINARY_PATH = Path.join(__dirname, '../..', 'node_modules', 'protobufjs', 'bin', 'pbjs');
const PROTO_FILE_PATH = Path.join(__dirname, '..', '%s.proto');
const DESTINATION_PATH = Path.join(__dirname, '..', 'generated', '%s.js');
const PBJS_COMMAND_LINE = `node "${PBJS_BINARY_PATH}" --target static-module --out "${DESTINATION_PATH}" --keep-case "${PROTO_FILE_PATH}"`;
const GENERATED_DIR = __dirname + '/../generated';

const GENERATING_PROTOS = ['csgo', 'steam']

let loader = "// Auto-generated by generate-protos script on " + (new Date()).toString() + "\n\n";
loader += "const Schema = module.exports;\n\n";

if (!FS.existsSync(GENERATED_DIR)) {
	FS.mkdirSync(GENERATED_DIR);
}

GENERATING_PROTOS.forEach(name => {
	FS.readdirSync(__dirname + `/../${name}/`).forEach((filename) => {
		if (!filename.match(/\.proto$/)) {
			return;
		}

		if (!FS.existsSync(Path.join(__dirname, '..', 'generated', name))) {
			FS.mkdirSync(Path.join(__dirname, '..', 'generated', name))
		}

		let filenameWithoutExtension = filename.replace('.proto', '');
		let cmdLine = PBJS_COMMAND_LINE.replace(/%s/g, `${name}\\` + filenameWithoutExtension);
		console.log(cmdLine);

		ChildProcess.execSync(cmdLine);
		loader += `mergeObjects(Schema, require('./${name}/${filenameWithoutExtension}.js'), '${name}');\n`;
	});
})

console.log("Generating _load.js");
loader += "\n" + mergeObjects.toString() + "\n";
FS.writeFileSync(GENERATED_DIR + '/_load.js', loader);

function mergeObjects(destinationObject, sourceObject, type) {
	destinationObject[type] = destinationObject[type] || {}
	for (let i in sourceObject) {
		if (sourceObject.hasOwnProperty(i)) {
			destinationObject[type][i] = sourceObject[i];
		}
	}
}
