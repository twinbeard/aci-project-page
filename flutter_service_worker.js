'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "30f0b3dd00ab682f08c5db14057cd255",
"version.json": "2b521e10dfa0f067561de489a19d6620",
"favicon.ico": "3acecfbc79fdbf90fa82bb6cbc5af92e",
"index.html": "67040399ad025bdfc6c8c5f49eed729b",
"/": "67040399ad025bdfc6c8c5f49eed729b",
"main.dart.js": "2a421136747d95f40a91f8fc30acc267",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.jpg": "a633607f5438555726d95c3ae181c173",
"icons/Icon-512.jpg": "a633607f5438555726d95c3ae181c173",
"manifest.json": "fd205dd5e6828302024b0dc200367bc8",
".git/ORIG_HEAD": "e1a8f46c4a38535d676f180140126b6c",
".git/config": "24c126a537bc484fff0cfb743c76ed75",
".git/objects/59/a8d2a95b8caac0a3e94c53b8e4665fb6dfe3e7": "f08111604bbdf7630afd914dce3d23de",
".git/objects/50/4d4f12c07f9f01133efcf8ebed9dc7fd7af246": "ca5b51fe5bd25356ba0f7261ffb009c2",
".git/objects/68/0dc437bddd5c2c149dc0a63cdca085837b30bc": "eb29969ce13efbf34676ca7d56188b67",
".git/objects/68/b2094efc19ebbb6225d6b056c2074d9cb124a0": "a0bd38ee92d80a3b0aa8543481ac1652",
".git/objects/03/db0335353fe0252a03c110ba8a672f991c595c": "a528e0fc851bd7f4f7b08edde2f24959",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/1af0c6a537cf96f8a8812a8739992ec9ef1266": "5ce1ff8f22f8b2a9a774b273450467ba",
".git/objects/6a/f542951a77716e9f62265c902eb61a31ddacdc": "b3c26c9b00f1fbc539e8bf0b1155897f",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/9497e60a1126883b3612f880c16a1a182c6ca2": "939b787195d93965206d12660496ae57",
".git/objects/69/b34d43eb612bfdc8566275717d2a30b83c1405": "fdd4a021b236c30525951503db8b2bfe",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/11faf43bf7dc5b20710a7f69ebf623dc5f564d": "839db1611428acbe3d7e0db6db99ed81",
".git/objects/56/7150a48e3d23526824834249e8663eed7c764a": "e1d9cdb3955d51b3144c282613808d86",
".git/objects/3d/f9d40c2c7d7cadaa68e211d9c6c898cac11e5b": "aaefd11554ccf9fe3e53bdc42935cd1d",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/f7a0d1f5cebf009ef82e094d12c71344d2f210": "65108c79f6725cd00a96c2c101cb2ae4",
".git/objects/93/a43db15214b906d48bc06ae1cb515a371c2272": "8ee9dac04df04e2d30a588e8c5feefe0",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/33/46c99a27b035a61d06fba05aac519c282026a7": "5f1bcdeb363416ac1e1df74bd9c27667",
".git/objects/02/c149df6b4995844240b825a5da5e4f0b980718": "9590a5805bd5c3a0b5c959dbb9ce110e",
".git/objects/d7/c46b9259f341144bcb14de0d67a51738c95a0f": "80a45afe9899012303ce4da2d48d0c31",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/4913a33d640d639401c3fa1494959c5adbd448": "b207c55c71ce1580f4653f168f76718e",
".git/objects/d1/52b21ad8f0671b86ac40d62f3b4a7a3baf48d5": "f756c5c1917735a2530610f8e78cffbb",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/c58fb02420d38902e1fee1798d54ec11dde906": "f34d662d3ee51a7e1a11fb1aef4afc4d",
".git/objects/e2/7d0dab2b2655c0c51393f6147ca02083641619": "e4f131ad3e339de3d11ef619ac6ced61",
".git/objects/f3/9ddddec7b6acea172f60c4aba47b4a5b367969": "eeb7620659ddac3c03589827cc3b8052",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e2ea196b03613b748fa5f1e296c375efef4caf": "49bb543e615c19a6a8e656c79c273513",
".git/objects/eb/2cbd61a732e07844f96f12e027742981c60e66": "c01a1beb8ba87100073e105abe004044",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/a891d5a0acc82e85d6a6e002fe8c2b57ad4e2c": "9b3655ca4322868d49cdc675541c68cd",
".git/objects/fd/ed211517722c7e28e36d643de0b9182b13ee58": "a759a506ec67f9efed8bf71c0dd29050",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/1602d5d645c3b2a0f91ad46587ba35c03f5884": "9b74babe584c11c6a7e44d99397aada8",
".git/objects/4e/906c88cb4f5a786da7415841dd35344cd9b3a2": "23962cf4de1a049abd16b8e219b4e6d9",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/d04d2b40e7242034ab3f795c785f494bc430df": "465f96bc4fba6f6880192564f7f158dc",
".git/objects/42/c7d05fc3367dc806e1a47849fca11fe29e7a48": "149a165f0bd8c8bacef81b7a1f517400",
".git/objects/1f/b64ad9ac7cdc325a81f81fc2cbab62a7b4bf72": "c9335bb9a3ded539be57eb5116c30a30",
".git/objects/1f/c993bb56031b8c1b9f9afda405cd30f80e0ef9": "77ca7acf7f5a98b0ea459d0afba5c6a3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/ec13d3d0182d412cdd278278e277f5ef84d8e6": "785aa79454e474d282d79bd5f6b39fd9",
".git/objects/17/d54ff477298bf0dfd39da4aaa66efa138897b3": "1808cb522af0e3d9beac4c0bd7f0513b",
".git/objects/17/739512b7ddbe8f55391e999b8ee67dbdebbcfb": "bb460b7a9a69733619e527c9f8465a85",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/a7e4e84773d65e13c2f6e323c679cfdc9b9340": "bdf6f9ba715fa4b337d81293d31b973e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/8a47c8269aa3cdb435d09e99f97b7a5527582b": "345ceacafc139b5417dc76e8ab66a0bd",
".git/objects/4c/28a521e01cd504e3c61b2fd07dadf5d4646528": "421cc1a9e1ff5a7fb9f4cfbae95a4e68",
".git/objects/4c/1fe969aa2ac3dac52e288ec0dabc76da2752e1": "51b2af8df1ea9ab960b7507e741e3a5d",
".git/objects/26/d25e27eb4618ddba3f140c6de676571d5a6ee3": "6bd15a57692378bf53826e135ef7da0d",
".git/objects/21/2ce2facd2aca24081a885431790fa42be0c9ec": "c7a7f00dde8791f37cebc39bb0a4f0a8",
".git/objects/72/db1685a1c8940aea03f5783ca231f33ac330a4": "f960b180f056dcb032da196faf8c8f99",
".git/objects/2f/98cdf0a55b7619ad47562eecb4db17f38e15d2": "475f2687b88f69152a74a026468925f2",
".git/objects/2f/c7ae0af89e452cda7a443f882874c5d56bb63b": "2c9a692abaeab102d8bf907eb139e86e",
".git/objects/43/0032d6a39ea5f328efc674532e7294264df946": "c480b6b93d266d50ede95f5f002b39de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/9ee26601c3e2d74c66fc6305b8aed070dfc47d": "7b862744a6af00ff2d9076cc5a4f3ef4",
".git/objects/38/474e722faf0d122c53375c7cc579a50e4e503f": "0499a56357ec1afa84c508374355adf4",
".git/objects/9a/45a765d82433e4c066122854d6bc841c41ca69": "979191ebda7283e4c79cf92985ae7d14",
".git/objects/36/911eb2ee245b6df94a24cde60e1e33c92b102a": "17543893ffdf4a8405df257a463aac84",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/96/889fbb22dba0787e26f35686f2cc59cddfe152": "6f66933fec3b5299eff0ad42b8b28470",
".git/objects/30/fcce7a8ea2af129c172fc603f7c7ed5c7526c9": "7c1083c9a05b6aaa61b8937dfa887c82",
".git/objects/6d/f206d7cd4cd8a0a829bbaf167477072bfe5791": "4c0d0af112cfa405bed171159d3301ca",
".git/objects/01/2fa5885a59d53eb6fbf3323baa4f24fdde8fbb": "8a49ef17a547580356c631646740b837",
".git/objects/01/105c5ee99505a2ab709a6333e08dfe6a717320": "bfd5cb7cce2fef81d460b0d58b2725cd",
".git/objects/39/9e1e5ff7f2eddd046b17f175000e491c728fa0": "090ed77d6b714fb36783a327385eeaa5",
".git/objects/99/67dabbb6ede0f186917ce2bafa9d8fbcd4b9b7": "ecff78b1357ca3c44d15ef23b2837a7a",
".git/objects/52/ee46bf0c5ec1821181df4e15ae65459ab780c1": "0da8e7b28911f87323606031aaa800b0",
".git/objects/d3/e9f443cb72dd62ed67b4fc47115aea66d951ff": "1e149067d78a8f9f663f9719a4443b2c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/28788884ba70184eaaec0992582fe66f4688f5": "0d63885d463abd453f6a1e4635c69d8a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/6ca153543f39b43b47b89d7056c926b5ac23a0": "1610718bfa23e55e3499eceb0ffeb29f",
".git/objects/b1/a9307b0f6bb63dd115abfb98544309bb1d4e5f": "1f1d85bc7d7494970d28fcf780e68000",
".git/objects/d5/32866d84ccef19f7dab57cc03aa89b2edfab05": "e3f6f2649fcb400f4ff4d1459c82bea7",
".git/objects/d2/9642e4f67e452f367c368a636e71fa655f8364": "31be821b0f8510732d027b7226d1243c",
".git/objects/d2/e05b28425d068da83124c049710582c2fb0bec": "0a850d905ec3e759c6f8e2c75759280e",
".git/objects/aa/f2d349e38b16fec70c25437585d8c458b03b59": "43632e4d5798b4b90c09695c065ec407",
".git/objects/b7/073c2934f07e0c48d083ab7e271d861df4bc30": "dc9390663e8dd28e7044bdd8be87c95d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/9644824c60fa604bbbafc32578097141b49a4a": "45ed06946312d62657881f24003e71e2",
".git/objects/a6/d8030863912e1f00fbd629ae594e101c11c214": "848ba22fdd11f662249068045abe700c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/8d05660c8ac6ae38b39c701e407008edb9f32a": "c7a63132b153af28e30e4a2d81dd894c",
".git/objects/c3/b17848d90b282f1bae4806e8f68a014b65c15a": "bfc1cb2a7829fb690d9c9a1f460534b0",
".git/objects/c3/f8cb00ef51481eac80583e3f881db83c9256c6": "103cbb6d0aa2b43ba0dba5b42de22e40",
".git/objects/c3/de7d3cec79a9f7acf9ab8b31def86f35f09a75": "189689a3aaa03a213082ccec913eb51c",
".git/objects/e1/13edde334af3efd9c491347c54419a42eba910": "0b23109621621a47303be86ca9167df8",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/713db6a8a8a9b2dfc9f75c800e07d9e008ac68": "e2a64c5d34161d311bfc34fca91fa11b",
".git/objects/f0/30c6469a247f4a0c2f1f45dbce90733596194b": "1b163c64a54c77d1ecb82e879513d5d5",
".git/objects/f7/4cb0f9ce09dbd54845a9c1f06fcdd8bee72fa8": "80d9fe70026ba21515729b7e6ab3ef6b",
".git/objects/fa/ac71038982c4c2da2074145c9b70dc0d0c1f0b": "23739a6831c68821583dd9312fb20dc8",
".git/objects/f6/6810916ea4cb7a1e724cda8f492ebca1a80011": "5d541a32027c00e649a652c321975d52",
".git/objects/e7/def95d3f44c82086f6e74d93fc0aadac7c454a": "28a34a73fd3e94b3fd53733dfaf2ed0e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/897ee8fcbcea906ff04bd9ee621ee7e11545de": "d27532c57429de73f7b58b433bd23631",
".git/objects/83/65b953df44324cf66bc659962b3aa87cdc92e5": "7c4db64a87f960a8447b1fbd26bad495",
".git/objects/77/4fa36691b6c671e0b6b875490b342ce40c469f": "a741b1e35a5c3e24f3c56ac0b13e1572",
".git/objects/48/9fe1ab974bfc468fcea384a8565e7690dd9da3": "f9add645c61b25a70029f70afed6d12c",
".git/objects/70/4072fdff1fff757f897e955a2b1c5ea9443e29": "e0909bd75610408147107a1670e69bad",
".git/objects/84/b4d2e054212fb0d95e2e464c57f30863745732": "24826d689b900e406a3bc4857495e530",
".git/objects/4a/8f9c6081fbc6f0f9784de36b94b0a16ee74659": "a4a8ee80c6bbae4cfa4c9f7829ed535f",
".git/objects/4f/4b941f84516d39dd4c99788eb7c5acb3378a94": "e271db8a7ddc6e891eddc38aa6eedd4a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/61e1a3cda012293dc3b249fb4b517798e58a3e": "bc8c0164fa0b517ad43709d355ef114e",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/23411808a8bac491e04d6f318c8634ff247abe": "6e466b1d68947836de05c7d9ed86344d",
".git/objects/76/c9ab19d80bc1369d5fc7f2e4ac9e770799172f": "efc479d9fb1fcb666fd219b108a0606f",
".git/objects/1c/b6f2cd098a04d160bca60b5e5e9d44fa6bfcfc": "262a8c10a302c7a65387b52609395125",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/40/9f4c96f4d32fa8c540b6d1f69960570b3b7312": "d364a83bfe14ba199a3fe41f3d97cd51",
".git/objects/2b/665e8bd5c3cdbd06f525d220d8624e34966614": "b6c70ebd5a5bd73b75dbc80f27e68dec",
".git/objects/7f/15fec5111372e225e1d12b743d18138e28ef34": "f2c7fab5ef99953a0c442fbe8629d3b2",
".git/objects/7a/1d481bb4ea5acbf6d0219ac3f360795672a690": "959b8b053347e2e0cddb0d608e623be8",
".git/objects/8e/7e1eafb4fd90f08cf4aa33f4efb5519da4689e": "2d0a4b559c3e401d8c8c7de4e8c7ecea",
".git/objects/22/d229b978a07fa11201108d9a330589ec097011": "36e2556f96843790c1e3229efc117019",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/ee5423cd41bd5820acd6b53c517e8ebba6295a": "22244b65915f8b57775c6e1ea3c138dd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c45d3b02b0080227c17ed0981b0847e1",
".git/logs/refs/heads/main": "f23fccfe6cc122a586efe050881e2400",
".git/logs/refs/remotes/origin/main": "c942eb538ab18cc93ed5561b64385dd3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "63973842d4091d8c93a1be4c98e26440",
".git/refs/remotes/origin/main": "63973842d4091d8c93a1be4c98e26440",
".git/index": "414892b0540e7076182d5b1c1a4c4889",
".git/COMMIT_EDITMSG": "cd6c1d83d5f791e1f0687447c33c8859",
".git/FETCH_HEAD": "d793a33a7645944a3f0449b1bf6e0ddc",
"assets/AssetManifest.json": "24e3d694c4460e08ff564e2a81065c23",
"assets/NOTICES": "23e2e904cd55b35f5cc5aabb85af54ae",
"assets/FontManifest.json": "7a4c96e5cf3b63f162e11847a55a6bcb",
"assets/AssetManifest.bin.json": "9d2a6e93e51bedb2d6b77a919a215ee3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7690320a9ade74ed0f6e9ea1292f6a75",
"assets/fonts/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/fonts/MaterialIcons-Regular.otf": "c8474afabcd2e6454e346f850d2a834a",
"assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/jsons/filteredVocabulary.json": "e7fa864b846f0345956b5ae2e8d3fb3a",
"assets/assets/jsons/filterArticle.json": "49aff70c1ffc7679844d2054a980529c",
"assets/assets/icons/icon.jpg": "a633607f5438555726d95c3ae181c173",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
