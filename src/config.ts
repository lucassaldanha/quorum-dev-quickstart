export const defaultConfig = {
  "clientType": "besu",
  "orchestrate": false,
  "privacy": true,
  "multiTenant": false,
  "p2pSSL": false,
  "validatorPKI": false,
  "elk": false,
  "enableStaticNodes": false,
  "enableBootNodes": true,
  "enableETHSignerProxy": true,
  "enableP2PDiscovery": true,
  "enableNodePermissions": true,
  "enableDNS": false,
  "besuConsAlgo": "ibft2",
  "besuConsApi": "IBFT",
  "enableMiner": false,
  "minerCoinbase": "fe3b557e8fb62b89f4916b721be55ceb828dbd73",
  "minGasPrice": 0,
  "privacyOnchainGroupsEnabled": false,
  "metrics": true,
  "defaultNetwork": "quorum-dev-quickstart",
  "besuVersion": "21.1.2",
  "nodeConfig": [
    {
      "name": "validator1",
      "ip": "172.16.239.11",
      "type": "validator",
      "roles": ["validator"],
      "boot": true,
      "networks": ["quorum-dev-quickstart"],
      "publicKey": "c1979a8a48693db804316b5acebe35e11731e1fb1c9c21ff7268ab25db6f6e03390a429b83cf0ec0865a7205f2669ec1ace652a3def11e2e01571c74939cbe22"
    },
    {
      "name": "validator2",
      "ip": "172.16.239.12",
      "type": "validator",
      "roles": ["validator"],
      "networks": ["quorum-dev-quickstart"],
      "publicKey": "e40129f02c9e29a02049668346d4777bb55809042746882b33b20a8b5a7310eb5f107a53f0aa3da766ee77f401557a79c0c328329ea48bf0996c6c9dff817f76"
    },
    {
      "name": "validator3",
      "ip": "172.16.239.13",
      "type": "validator",
      "roles": ["validator"],
      "networks": ["quorum-dev-quickstart"],
      "publicKey": "a3e4af081a0ab853c959b9acd0596f818b91a9409b9d04c50af055072c929abfa340e14111dcfa76e049fdb16bb9198e722d5e7be3e8ef37562ea0d0ce1eda11"
    },
    {
      "name": "validator4",
      "ip": "172.16.239.14",
      "type": "validator",
      "roles": ["validator"],
      "networks": ["quorum-dev-quickstart"],
      "publicKey": "8f4e444a73034236ab4244c7a572aa2c6198b9e0d483ef17bf4b751cac5c0370bc527a5b0c5d01aa3ef41704af838c74730aeecac0f0c22dc4c17b0a9f03ad76"
    },
    {
      "name": "rpcnode",
      "ip": "172.16.239.15",
      "type": "rpc",
      "roles": ["rpc"],
      "networks": ["quorum-dev-quickstart"],
      "publicKey": "51729f1b4186db1701e13d9e71b7b4f0a35e0cc1f480c904c5e758b5b76936685dccde490c623a79f6c6c5d1dfd3eae37d35101e1a9a2d06536074562dd77604"
    },
    {
      "name": "member1",
      "ip": "172.16.239.16",
      "type": "member",
      "roles": ["member"],
      "publicKey": "09b02f8a5fddd222ade4ea4528faefc399623af3f736be3c44f03e2df22fb792f3931a4d9573d333ca74343305762a753388c3422a86d98b713fc91c1ea04842",
      "networks": ["quorum-dev-quickstart"],
      "orion": "orion1"
    },
    {
      "name": "member2",
      "ip": "172.16.239.17",
      "type": "member",
      "roles": ["member"],
      "publicKey": "af80b90d25145da28c583359beb47b21796b2fe1a23c1511e443e7a64dfdb27d7434c380f0aa4c500e220aa1a9d068514b1ff4d5019e624e7ba1efe82b340a59",
      "networks": ["quorum-dev-quickstart"],
      "orion": "orion2"
    },
    {
      "name": "member3",
      "ip": "172.16.239.18",
      "type": "member",
      "roles": ["member"],
      "publicKey": "ce7edc292d7b747fab2f23584bbafaffde5c8ff17cf689969614441e0527b90015ea9fee96aed6d9c0fc2fbe0bd1883dee223b3200246ff1e21976bdbc9a0fc8",
      "networks": ["quorum-dev-quickstart"],
      "orion": "orion3"
    },
    {
      "name": "orion1",
      "ip": "172.16.239.26",
      "type": "orion",
      "roles": ["orion"],
      "networks": ["quorum-dev-quickstart"]
    },
    {
      "name": "orion2",
      "ip": "172.16.239.27",
      "type": "orion",
      "roles": ["orion"],
      "networks": ["quorum-dev-quickstart"]
    },
    {
      "name": "orion3",
      "ip": "172.16.239.28",
      "type": "orion",
      "roles": ["orion"],
      "networks": ["quorum-dev-quickstart"]
    }
  ]
};