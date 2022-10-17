export declare const gnosisSafeInterface: {
    abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    bytecode: {
        object: string;
        sourceMap: string;
        linkReferences: {};
    };
    deployedBytecode: {
        object: string;
        sourceMap: string;
        linkReferences: {};
    };
    methodIdentifiers: {
        "VERSION()": string;
        "addOwnerWithThreshold(address,uint256)": string;
        "approveHash(bytes32)": string;
        "approvedHashes(address,bytes32)": string;
        "changeThreshold(uint256)": string;
        "checkNSignatures(bytes32,bytes,bytes,uint256)": string;
        "checkSignatures(bytes32,bytes,bytes)": string;
        "disableModule(address,address)": string;
        "domainSeparator()": string;
        "enableModule(address)": string;
        "encodeTransactionData(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)": string;
        "execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)": string;
        "execTransactionFromModule(address,uint256,bytes,uint8)": string;
        "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": string;
        "getChainId()": string;
        "getModulesPaginated(address,uint256)": string;
        "getOwners()": string;
        "getStorageAt(uint256,uint256)": string;
        "getThreshold()": string;
        "getTransactionHash(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)": string;
        "isModuleEnabled(address)": string;
        "isOwner(address)": string;
        "nonce()": string;
        "removeOwner(address,address,uint256)": string;
        "requiredTxGas(address,uint256,bytes,uint8)": string;
        "setFallbackHandler(address)": string;
        "setGuard(address)": string;
        "setup(address[],uint256,address,bytes,address,address,uint256,address)": string;
        "signedMessages(bytes32)": string;
        "simulateAndRevert(address,bytes)": string;
        "swapOwner(address,address,address)": string;
    };
    rawMetadata: string;
    metadata: {
        compiler: {
            version: string;
        };
        language: string;
        output: {
            abi: ({
                inputs: never[];
                stateMutability: string;
                type: string;
                name?: undefined;
                anonymous?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                    indexed: boolean;
                }[];
                type: string;
                name: string;
                anonymous: boolean;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                name: string;
                anonymous?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                anonymous?: undefined;
            })[];
            devdoc: {
                kind: string;
                methods: {
                    "addOwnerWithThreshold(address,uint256)": {
                        details: string;
                        params: {
                            _threshold: string;
                            owner: string;
                        };
                    };
                    "approveHash(bytes32)": {
                        details: string;
                        params: {
                            hashToApprove: string;
                        };
                    };
                    "changeThreshold(uint256)": {
                        details: string;
                        params: {
                            _threshold: string;
                        };
                    };
                    "checkNSignatures(bytes32,bytes,bytes,uint256)": {
                        details: string;
                        params: {
                            data: string;
                            dataHash: string;
                            requiredSignatures: string;
                            signatures: string;
                        };
                    };
                    "checkSignatures(bytes32,bytes,bytes)": {
                        details: string;
                        params: {
                            data: string;
                            dataHash: string;
                            signatures: string;
                        };
                    };
                    "disableModule(address,address)": {
                        details: string;
                        params: {
                            module: string;
                            prevModule: string;
                        };
                    };
                    "enableModule(address)": {
                        details: string;
                        params: {
                            module: string;
                        };
                    };
                    "encodeTransactionData(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)": {
                        details: string;
                        params: {
                            _nonce: string;
                            baseGas: string;
                            data: string;
                            gasPrice: string;
                            gasToken: string;
                            operation: string;
                            refundReceiver: string;
                            safeTxGas: string;
                            to: string;
                            value: string;
                        };
                        returns: {
                            _0: string;
                        };
                    };
                    "execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)": {
                        details: string;
                        params: {
                            baseGas: string;
                            data: string;
                            gasPrice: string;
                            gasToken: string;
                            operation: string;
                            refundReceiver: string;
                            safeTxGas: string;
                            signatures: string;
                            to: string;
                            value: string;
                        };
                    };
                    "execTransactionFromModule(address,uint256,bytes,uint8)": {
                        details: string;
                        params: {
                            data: string;
                            operation: string;
                            to: string;
                            value: string;
                        };
                    };
                    "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": {
                        details: string;
                        params: {
                            data: string;
                            operation: string;
                            to: string;
                            value: string;
                        };
                    };
                    "getChainId()": {
                        details: string;
                    };
                    "getModulesPaginated(address,uint256)": {
                        details: string;
                        params: {
                            pageSize: string;
                            start: string;
                        };
                        returns: {
                            array: string;
                            next: string;
                        };
                    };
                    "getOwners()": {
                        details: string;
                        returns: {
                            _0: string;
                        };
                    };
                    "getStorageAt(uint256,uint256)": {
                        details: string;
                        params: {
                            length: string;
                            offset: string;
                        };
                        returns: {
                            _0: string;
                        };
                    };
                    "getTransactionHash(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)": {
                        details: string;
                        params: {
                            _nonce: string;
                            baseGas: string;
                            data: string;
                            gasPrice: string;
                            gasToken: string;
                            operation: string;
                            refundReceiver: string;
                            safeTxGas: string;
                            to: string;
                            value: string;
                        };
                        returns: {
                            _0: string;
                        };
                    };
                    "isModuleEnabled(address)": {
                        details: string;
                        returns: {
                            _0: string;
                        };
                    };
                    "removeOwner(address,address,uint256)": {
                        details: string;
                        params: {
                            _threshold: string;
                            owner: string;
                            prevOwner: string;
                        };
                    };
                    "requiredTxGas(address,uint256,bytes,uint8)": {
                        details: string;
                        params: {
                            data: string;
                            operation: string;
                            to: string;
                            value: string;
                        };
                        returns: {
                            _0: string;
                        };
                    };
                    "setFallbackHandler(address)": {
                        details: string;
                        params: {
                            handler: string;
                        };
                    };
                    "setGuard(address)": {
                        details: string;
                        params: {
                            guard: string;
                        };
                    };
                    "setup(address[],uint256,address,bytes,address,address,uint256,address)": {
                        details: string;
                        params: {
                            _owners: string;
                            _threshold: string;
                            data: string;
                            fallbackHandler: string;
                            payment: string;
                            paymentReceiver: string;
                            paymentToken: string;
                            to: string;
                        };
                    };
                    "simulateAndRevert(address,bytes)": {
                        details: string;
                        params: {
                            calldataPayload: string;
                            targetContract: string;
                        };
                    };
                    "swapOwner(address,address,address)": {
                        details: string;
                        params: {
                            newOwner: string;
                            oldOwner: string;
                            prevOwner: string;
                        };
                    };
                };
                version: number;
            };
            userdoc: {
                kind: string;
                methods: {
                    "addOwnerWithThreshold(address,uint256)": {
                        notice: string;
                    };
                    "changeThreshold(uint256)": {
                        notice: string;
                    };
                    "disableModule(address,address)": {
                        notice: string;
                    };
                    "enableModule(address)": {
                        notice: string;
                    };
                    "removeOwner(address,address,uint256)": {
                        notice: string;
                    };
                    "requiredTxGas(address,uint256,bytes,uint8)": {
                        notice: string;
                    };
                    "swapOwner(address,address,address)": {
                        notice: string;
                    };
                };
                version: number;
            };
        };
        settings: {
            remappings: string[];
            optimizer: {
                enabled: boolean;
                runs: number;
            };
            metadata: {
                bytecodeHash: string;
            };
            compilationTarget: {
                "lib/safe-contracts/contracts/GnosisSafe.sol": string;
            };
            libraries: {};
        };
        sources: {
            "lib/safe-contracts/contracts/GnosisSafe.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/base/Executor.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/base/FallbackManager.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/base/GuardManager.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/base/ModuleManager.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/base/OwnerManager.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/common/Enum.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/common/EtherPaymentFallback.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/common/SecuredTokenTransfer.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/common/SelfAuthorized.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/common/SignatureDecoder.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/common/Singleton.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/common/StorageAccessible.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/external/GnosisSafeMath.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/interfaces/IERC165.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
            "lib/safe-contracts/contracts/interfaces/ISignatureValidator.sol": {
                keccak256: string;
                urls: string[];
                license: string;
            };
        };
        version: number;
    };
    ast: {
        absolutePath: string;
        id: number;
        exportedSymbols: {
            BaseGuard: number[];
            Enum: number[];
            EtherPaymentFallback: number[];
            Executor: number[];
            FallbackManager: number[];
            GnosisSafe: number[];
            GnosisSafeMath: number[];
            Guard: number[];
            GuardManager: number[];
            IERC165: number[];
            ISignatureValidator: number[];
            ISignatureValidatorConstants: number[];
            ModuleManager: number[];
            OwnerManager: number[];
            SecuredTokenTransfer: number[];
            SelfAuthorized: number[];
            SignatureDecoder: number[];
            Singleton: number[];
            StorageAccessible: number[];
        };
        nodeType: string;
        src: string;
        nodes: ({
            id: number;
            nodeType: string;
            src: string;
            literals: string[];
            absolutePath?: undefined;
            file?: undefined;
            nameLocation?: undefined;
            scope?: undefined;
            sourceUnit?: undefined;
            symbolAliases?: undefined;
            unitAlias?: undefined;
            nodes?: undefined;
            abstract?: undefined;
            baseContracts?: undefined;
            canonicalName?: undefined;
            contractDependencies?: undefined;
            contractKind?: undefined;
            documentation?: undefined;
            fullyImplemented?: undefined;
            linearizedBaseContracts?: undefined;
            name?: undefined;
            usedErrors?: undefined;
        } | {
            id: number;
            nodeType: string;
            src: string;
            absolutePath: string;
            file: string;
            nameLocation: string;
            scope: number;
            sourceUnit: number;
            symbolAliases: never[];
            unitAlias: string;
            literals?: undefined;
            nodes?: undefined;
            abstract?: undefined;
            baseContracts?: undefined;
            canonicalName?: undefined;
            contractDependencies?: undefined;
            contractKind?: undefined;
            documentation?: undefined;
            fullyImplemented?: undefined;
            linearizedBaseContracts?: undefined;
            name?: undefined;
            usedErrors?: undefined;
        } | {
            id: number;
            nodeType: string;
            src: string;
            nodes: ({
                id: number;
                nodeType: string;
                src: string;
                libraryName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    referencedDeclaration: number;
                    src: string;
                };
                typeName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                    };
                    keyType?: undefined;
                    valueType?: undefined;
                };
                constant?: undefined;
                functionSelector?: undefined;
                mutability?: undefined;
                name?: undefined;
                nameLocation?: undefined;
                scope?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                visibility?: undefined;
                anonymous?: undefined;
                parameters?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                constant: boolean;
                functionSelector: string;
                mutability: string;
                name: string;
                nameLocation: string;
                scope: number;
                stateVariable: boolean;
                storageLocation: string;
                typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                };
                typeName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                    };
                    keyType?: undefined;
                    valueType?: undefined;
                };
                value: {
                    hexValue: string;
                    id: number;
                    isConstant: boolean;
                    isLValue: boolean;
                    isPure: boolean;
                    kind: string;
                    lValueRequested: boolean;
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                    };
                    value: string;
                };
                visibility: string;
                libraryName?: undefined;
                anonymous?: undefined;
                parameters?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                constant: boolean;
                mutability: string;
                name: string;
                nameLocation: string;
                scope: number;
                stateVariable: boolean;
                storageLocation: string;
                typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                };
                typeName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                    };
                    keyType?: undefined;
                    valueType?: undefined;
                };
                value: {
                    hexValue: string;
                    id: number;
                    isConstant: boolean;
                    isLValue: boolean;
                    isPure: boolean;
                    kind: string;
                    lValueRequested: boolean;
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                    };
                    value: string;
                };
                visibility: string;
                libraryName?: undefined;
                functionSelector?: undefined;
                anonymous?: undefined;
                parameters?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                anonymous: boolean;
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: ({
                        constant: boolean;
                        id: number;
                        indexed: boolean;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            stateMutability: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            baseType?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        indexed: boolean;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            baseType: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                stateMutability: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            name?: undefined;
                            stateMutability?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        indexed: boolean;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            stateMutability?: undefined;
                            baseType?: undefined;
                        };
                        visibility: string;
                    })[];
                    src: string;
                };
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                functionSelector?: undefined;
                mutability?: undefined;
                scope?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                visibility?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                constant: boolean;
                functionSelector: string;
                mutability: string;
                name: string;
                nameLocation: string;
                scope: number;
                stateVariable: boolean;
                storageLocation: string;
                typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                };
                typeName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                    };
                    keyType?: undefined;
                    valueType?: undefined;
                };
                visibility: string;
                libraryName?: undefined;
                value?: undefined;
                anonymous?: undefined;
                parameters?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                constant: boolean;
                mutability: string;
                name: string;
                nameLocation: string;
                scope: number;
                stateVariable: boolean;
                storageLocation: string;
                typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                };
                typeName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                    };
                    keyType?: undefined;
                    valueType?: undefined;
                };
                visibility: string;
                libraryName?: undefined;
                functionSelector?: undefined;
                value?: undefined;
                anonymous?: undefined;
                parameters?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                constant: boolean;
                functionSelector: string;
                mutability: string;
                name: string;
                nameLocation: string;
                scope: number;
                stateVariable: boolean;
                storageLocation: string;
                typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                };
                typeName: {
                    id: number;
                    keyType: {
                        id: number;
                        name: string;
                        nodeType: string;
                        src: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                    };
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                    };
                    valueType: {
                        id: number;
                        name: string;
                        nodeType: string;
                        src: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        keyType?: undefined;
                        valueType?: undefined;
                    };
                    name?: undefined;
                };
                visibility: string;
                libraryName?: undefined;
                value?: undefined;
                anonymous?: undefined;
                parameters?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                constant: boolean;
                functionSelector: string;
                mutability: string;
                name: string;
                nameLocation: string;
                scope: number;
                stateVariable: boolean;
                storageLocation: string;
                typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                };
                typeName: {
                    id: number;
                    keyType: {
                        id: number;
                        name: string;
                        nodeType: string;
                        src: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                    };
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                    };
                    valueType: {
                        id: number;
                        keyType: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        nodeType: string;
                        src: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        valueType: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        name?: undefined;
                    };
                    name?: undefined;
                };
                visibility: string;
                libraryName?: undefined;
                value?: undefined;
                anonymous?: undefined;
                parameters?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: {
                        expression: {
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            leftHandSide: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            nodeType: string;
                            operator: string;
                            rightHandSide: {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                value: string;
                            };
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                    }[];
                };
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: never[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: never[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                functionSelector?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: ({
                        expression: {
                            arguments: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            }[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        condition?: undefined;
                        trueBody?: undefined;
                        eventCall?: undefined;
                    } | {
                        condition: {
                            commonType: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            leftExpression: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            nodeType: string;
                            operator: string;
                            rightExpression: {
                                arguments: {
                                    hexValue: string;
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    value: string;
                                }[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    typeName: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {};
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                hexValue?: undefined;
                                value?: undefined;
                            };
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        trueBody: {
                            expression: {
                                arguments: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                }[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            statements?: undefined;
                        };
                        expression?: undefined;
                        eventCall?: undefined;
                    } | {
                        condition: {
                            commonType: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            leftExpression: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            nodeType: string;
                            operator: string;
                            rightExpression: {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                value: string;
                                arguments?: undefined;
                                expression?: undefined;
                                names?: undefined;
                                tryCall?: undefined;
                            };
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        trueBody: {
                            id: number;
                            nodeType: string;
                            src: string;
                            statements: {
                                expression: {
                                    arguments: ({
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        hexValue?: undefined;
                                        isConstant?: undefined;
                                        isLValue?: undefined;
                                        isPure?: undefined;
                                        kind?: undefined;
                                        lValueRequested?: undefined;
                                        value?: undefined;
                                    } | {
                                        hexValue: string;
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        value: string;
                                        name?: undefined;
                                        overloadedDeclarations?: undefined;
                                        referencedDeclaration?: undefined;
                                    })[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                            }[];
                            expression?: undefined;
                        };
                        expression?: undefined;
                        eventCall?: undefined;
                    } | {
                        eventCall: {
                            arguments: ({
                                expression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                memberName: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                name?: undefined;
                                overloadedDeclarations?: undefined;
                                referencedDeclaration?: undefined;
                            } | {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                expression?: undefined;
                                isConstant?: undefined;
                                isLValue?: undefined;
                                isPure?: undefined;
                                lValueRequested?: undefined;
                                memberName?: undefined;
                            })[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                        condition?: undefined;
                        trueBody?: undefined;
                    })[];
                };
                documentation: {
                    id: number;
                    nodeType: string;
                    src: string;
                    text: string;
                };
                functionSelector: string;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: ({
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            baseType: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                stateMutability: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            name?: undefined;
                            stateMutability?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            baseType?: undefined;
                            stateMutability?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            stateMutability: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            baseType?: undefined;
                        };
                        visibility: string;
                    })[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: never[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: ({
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        nodeType: string;
                        src: string;
                        statements?: undefined;
                        initialValue?: undefined;
                        expression?: undefined;
                    } | {
                        id: number;
                        nodeType: string;
                        src: string;
                        statements: ({
                            assignments: number[];
                            declarations: {
                                constant: boolean;
                                id: number;
                                mutability: string;
                                name: string;
                                nameLocation: string;
                                nodeType: string;
                                scope: number;
                                src: string;
                                stateVariable: boolean;
                                storageLocation: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                typeName: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                visibility: string;
                            }[];
                            id: number;
                            initialValue: {
                                arguments: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                }[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            nodeType: string;
                            src: string;
                            expression?: undefined;
                        } | {
                            expression: {
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                nodeType: string;
                                operator: string;
                                prefix: boolean;
                                src: string;
                                subExpression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                leftHandSide?: undefined;
                                rightHandSide?: undefined;
                                arguments?: undefined;
                                expression?: undefined;
                                kind?: undefined;
                                names?: undefined;
                                tryCall?: undefined;
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            assignments?: undefined;
                            declarations?: undefined;
                            initialValue?: undefined;
                        } | {
                            expression: {
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftHandSide: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightHandSide: {
                                    arguments: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    }[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                prefix?: undefined;
                                subExpression?: undefined;
                                arguments?: undefined;
                                expression?: undefined;
                                kind?: undefined;
                                names?: undefined;
                                tryCall?: undefined;
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            assignments?: undefined;
                            declarations?: undefined;
                            initialValue?: undefined;
                        } | {
                            expression: {
                                arguments: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                }[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                operator?: undefined;
                                prefix?: undefined;
                                subExpression?: undefined;
                                leftHandSide?: undefined;
                                rightHandSide?: undefined;
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            assignments?: undefined;
                            declarations?: undefined;
                            initialValue?: undefined;
                        })[];
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                        expression?: undefined;
                    } | {
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                stateMutability: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        initialValue: {
                            arguments: never[];
                            expression: {
                                argumentTypes: never[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        nodeType: string;
                        src: string;
                        statements?: undefined;
                        expression?: undefined;
                    } | {
                        id: number;
                        nodeType: string;
                        src: string;
                        statements: {
                            condition: {
                                commonType: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftExpression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightExpression: {
                                    arguments: {
                                        hexValue: string;
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        value: string;
                                    }[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        typeName: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            src: string;
                                            typeDescriptions: {};
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            trueBody: {
                                id: number;
                                nodeType: string;
                                src: string;
                                statements: {
                                    expression: {
                                        arguments: ({
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            expression?: undefined;
                                            isConstant?: undefined;
                                            isLValue?: undefined;
                                            isPure?: undefined;
                                            lValueRequested?: undefined;
                                            memberName?: undefined;
                                        } | {
                                            expression: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            memberName: string;
                                            nodeType: string;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            name?: undefined;
                                            overloadedDeclarations?: undefined;
                                            referencedDeclaration?: undefined;
                                        })[];
                                        expression: {
                                            argumentTypes: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            }[];
                                            expression: {
                                                arguments: {
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: never[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                }[];
                                                expression: {
                                                    argumentTypes: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    }[];
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: never[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                names: never[];
                                                nodeType: string;
                                                src: string;
                                                tryCall: boolean;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            memberName: string;
                                            nodeType: string;
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        names: never[];
                                        nodeType: string;
                                        src: string;
                                        tryCall: boolean;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    nodeType: string;
                                    src: string;
                                }[];
                            };
                        }[];
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                        expression?: undefined;
                    } | {
                        expression: {
                            arguments: ({
                                commonType: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftExpression: {
                                    arguments: never[];
                                    expression: {
                                        argumentTypes: never[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightExpression: {
                                    commonType: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    leftExpression: {
                                        arguments: {
                                            commonType: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            leftExpression: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            nodeType: string;
                                            operator: string;
                                            rightExpression: {
                                                hexValue: string;
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                value: string;
                                            };
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        }[];
                                        expression: {
                                            argumentTypes: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            }[];
                                            expression: {
                                                components: {
                                                    commonType: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    leftExpression: {
                                                        components: {
                                                            commonType: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            lValueRequested: boolean;
                                                            leftExpression: {
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                overloadedDeclarations: never[];
                                                                referencedDeclaration: number;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            };
                                                            nodeType: string;
                                                            operator: string;
                                                            rightExpression: {
                                                                hexValue: string;
                                                                id: number;
                                                                isConstant: boolean;
                                                                isLValue: boolean;
                                                                isPure: boolean;
                                                                kind: string;
                                                                lValueRequested: boolean;
                                                                nodeType: string;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                                value: string;
                                                            };
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        }[];
                                                        id: number;
                                                        isConstant: boolean;
                                                        isInlineArray: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        nodeType: string;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    nodeType: string;
                                                    operator: string;
                                                    rightExpression: {
                                                        hexValue: string;
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        kind: string;
                                                        lValueRequested: boolean;
                                                        nodeType: string;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                        value: string;
                                                    };
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                }[];
                                                id: number;
                                                isConstant: boolean;
                                                isInlineArray: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            memberName: string;
                                            nodeType: string;
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        names: never[];
                                        nodeType: string;
                                        src: string;
                                        tryCall: boolean;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    nodeType: string;
                                    operator: string;
                                    rightExpression: {
                                        hexValue: string;
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        value: string;
                                    };
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                hexValue?: undefined;
                                kind?: undefined;
                                value?: undefined;
                            } | {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                value: string;
                                commonType?: undefined;
                                leftExpression?: undefined;
                                operator?: undefined;
                                rightExpression?: undefined;
                            })[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: number[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        assignments?: undefined;
                        declarations?: undefined;
                        statements?: undefined;
                        initialValue?: undefined;
                    } | {
                        id: number;
                        nodeType: string;
                        src: string;
                        statements: ({
                            assignments: number[];
                            declarations: {
                                constant: boolean;
                                id: number;
                                mutability: string;
                                name: string;
                                nameLocation: string;
                                nodeType: string;
                                scope: number;
                                src: string;
                                stateVariable: boolean;
                                storageLocation: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                typeName: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                visibility: string;
                            }[];
                            id: number;
                            initialValue: {
                                arguments: never[];
                                expression: {
                                    argumentTypes: never[];
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                hexValue?: undefined;
                                value?: undefined;
                            };
                            nodeType: string;
                            src: string;
                            expression?: undefined;
                            condition?: undefined;
                            trueBody?: undefined;
                            falseBody?: undefined;
                        } | {
                            expression: {
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftHandSide: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightHandSide: {
                                    arguments: ({
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        condition?: undefined;
                                        falseExpression?: undefined;
                                        isConstant?: undefined;
                                        isLValue?: undefined;
                                        isPure?: undefined;
                                        lValueRequested?: undefined;
                                        trueExpression?: undefined;
                                    } | {
                                        condition: {
                                            commonType: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            leftExpression: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            nodeType: string;
                                            operator: string;
                                            rightExpression: {
                                                hexValue: string;
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                value: string;
                                            };
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        falseExpression: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        trueExpression: {
                                            components: {
                                                commonType: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                leftExpression: {
                                                    arguments: never[];
                                                    expression: {
                                                        argumentTypes: never[];
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    names: never[];
                                                    nodeType: string;
                                                    src: string;
                                                    tryCall: boolean;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                nodeType: string;
                                                operator: string;
                                                rightExpression: {
                                                    hexValue: string;
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    nodeType: string;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                    value: string;
                                                };
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            }[];
                                            id: number;
                                            isConstant: boolean;
                                            isInlineArray: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            nodeType: string;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        name?: undefined;
                                        overloadedDeclarations?: undefined;
                                        referencedDeclaration?: undefined;
                                    })[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        expression?: undefined;
                                        isConstant?: undefined;
                                        isLValue?: undefined;
                                        isPure?: undefined;
                                        lValueRequested?: undefined;
                                        memberName?: undefined;
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                arguments?: undefined;
                                expression?: undefined;
                                kind?: undefined;
                                names?: undefined;
                                tryCall?: undefined;
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            assignments?: undefined;
                            declarations?: undefined;
                            initialValue?: undefined;
                            condition?: undefined;
                            trueBody?: undefined;
                            falseBody?: undefined;
                        } | {
                            expression: {
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftHandSide: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightHandSide: {
                                    arguments: {
                                        arguments: never[];
                                        expression: {
                                            argumentTypes: never[];
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        names: never[];
                                        nodeType: string;
                                        src: string;
                                        tryCall: boolean;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    }[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        expression: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        memberName: string;
                                        nodeType: string;
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        name?: undefined;
                                        overloadedDeclarations?: undefined;
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                arguments?: undefined;
                                expression?: undefined;
                                kind?: undefined;
                                names?: undefined;
                                tryCall?: undefined;
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            assignments?: undefined;
                            declarations?: undefined;
                            initialValue?: undefined;
                            condition?: undefined;
                            trueBody?: undefined;
                            falseBody?: undefined;
                        } | {
                            expression: {
                                arguments: ({
                                    commonType: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    leftExpression: {
                                        commonType: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        leftExpression: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        nodeType: string;
                                        operator: string;
                                        rightExpression: {
                                            commonType: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            leftExpression: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            nodeType: string;
                                            operator: string;
                                            rightExpression: {
                                                hexValue: string;
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                value: string;
                                            };
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    nodeType: string;
                                    operator: string;
                                    rightExpression: {
                                        commonType: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        leftExpression: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        nodeType: string;
                                        operator: string;
                                        rightExpression: {
                                            hexValue: string;
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            kind: string;
                                            lValueRequested: boolean;
                                            nodeType: string;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            value: string;
                                        };
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    hexValue?: undefined;
                                    kind?: undefined;
                                    value?: undefined;
                                } | {
                                    hexValue: string;
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    value: string;
                                    commonType?: undefined;
                                    leftExpression?: undefined;
                                    operator?: undefined;
                                    rightExpression?: undefined;
                                })[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: number[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                leftHandSide?: undefined;
                                operator?: undefined;
                                rightHandSide?: undefined;
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            assignments?: undefined;
                            declarations?: undefined;
                            initialValue?: undefined;
                            condition?: undefined;
                            trueBody?: undefined;
                            falseBody?: undefined;
                        } | {
                            assignments: number[];
                            declarations: {
                                constant: boolean;
                                id: number;
                                mutability: string;
                                name: string;
                                nameLocation: string;
                                nodeType: string;
                                scope: number;
                                src: string;
                                stateVariable: boolean;
                                storageLocation: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                typeName: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                visibility: string;
                            }[];
                            id: number;
                            initialValue: {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                value: string;
                                arguments?: undefined;
                                expression?: undefined;
                                names?: undefined;
                                tryCall?: undefined;
                            };
                            nodeType: string;
                            src: string;
                            expression?: undefined;
                            condition?: undefined;
                            trueBody?: undefined;
                            falseBody?: undefined;
                        } | {
                            condition: {
                                commonType: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftExpression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightExpression: {
                                    hexValue: string;
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    value: string;
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                name?: undefined;
                                overloadedDeclarations?: undefined;
                                referencedDeclaration?: undefined;
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            trueBody: {
                                id: number;
                                nodeType: string;
                                src: string;
                                statements: {
                                    expression: {
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        leftHandSide: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        nodeType: string;
                                        operator: string;
                                        rightHandSide: {
                                            arguments: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            }[];
                                            expression: {
                                                argumentTypes: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                }[];
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            kind: string;
                                            lValueRequested: boolean;
                                            names: never[];
                                            nodeType: string;
                                            src: string;
                                            tryCall: boolean;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    nodeType: string;
                                    src: string;
                                }[];
                                eventCall?: undefined;
                            };
                            assignments?: undefined;
                            declarations?: undefined;
                            initialValue?: undefined;
                            expression?: undefined;
                            falseBody?: undefined;
                        } | {
                            condition: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                commonType?: undefined;
                                isConstant?: undefined;
                                isLValue?: undefined;
                                isPure?: undefined;
                                lValueRequested?: undefined;
                                leftExpression?: undefined;
                                operator?: undefined;
                                rightExpression?: undefined;
                            };
                            falseBody: {
                                eventCall: {
                                    arguments: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    }[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                            trueBody: {
                                eventCall: {
                                    arguments: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    }[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                                statements?: undefined;
                            };
                            assignments?: undefined;
                            declarations?: undefined;
                            initialValue?: undefined;
                            expression?: undefined;
                        })[];
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                        expression?: undefined;
                    })[];
                };
                documentation: {
                    id: number;
                    nodeType: string;
                    src: string;
                    text: string;
                };
                functionSelector: string;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: ({
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            stateMutability: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            pathNode?: undefined;
                            referencedDeclaration?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            stateMutability?: undefined;
                            pathNode?: undefined;
                            referencedDeclaration?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            nodeType: string;
                            pathNode: {
                                id: number;
                                name: string;
                                nodeType: string;
                                referencedDeclaration: number;
                                src: string;
                            };
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            name?: undefined;
                            stateMutability?: undefined;
                        };
                        visibility: string;
                    })[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    }[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: ({
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                stateMutability: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        initialValue: {
                            condition: {
                                commonType: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftExpression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightExpression: {
                                    arguments: {
                                        hexValue: string;
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        value: string;
                                    }[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        typeName: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            src: string;
                                            typeDescriptions: {};
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            falseExpression: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            nodeType: string;
                            src: string;
                            trueExpression: {
                                arguments: {
                                    expression: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    memberName: string;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                }[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    typeName: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        src: string;
                                        stateMutability: string;
                                        typeDescriptions: {};
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        nodeType: string;
                        src: string;
                        condition?: undefined;
                        falseBody?: undefined;
                        trueBody?: undefined;
                    } | {
                        condition: {
                            commonType: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            leftExpression: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            nodeType: string;
                            operator: string;
                            rightExpression: {
                                arguments: {
                                    hexValue: string;
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    value: string;
                                }[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    typeName: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {};
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        falseBody: {
                            id: number;
                            nodeType: string;
                            src: string;
                            statements: ({
                                expression: {
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    leftHandSide: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    nodeType: string;
                                    operator: string;
                                    rightHandSide: {
                                        arguments: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        }[];
                                        expression: {
                                            argumentTypes: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            }[];
                                            expression: {
                                                arguments: {
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: never[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                }[];
                                                expression: {
                                                    argumentTypes: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    }[];
                                                    expression: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    memberName: string;
                                                    nodeType: string;
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                names: never[];
                                                nodeType: string;
                                                src: string;
                                                tryCall: boolean;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            memberName: string;
                                            nodeType: string;
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        names: never[];
                                        nodeType: string;
                                        src: string;
                                        tryCall: boolean;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    arguments?: undefined;
                                    expression?: undefined;
                                    kind?: undefined;
                                    names?: undefined;
                                    tryCall?: undefined;
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                            } | {
                                expression: {
                                    arguments: ({
                                        arguments: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        }[];
                                        expression: {
                                            argumentTypes: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            }[];
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        names: never[];
                                        nodeType: string;
                                        src: string;
                                        tryCall: boolean;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        hexValue?: undefined;
                                        value?: undefined;
                                    } | {
                                        hexValue: string;
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        value: string;
                                        arguments?: undefined;
                                        expression?: undefined;
                                        names?: undefined;
                                        tryCall?: undefined;
                                    })[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: number[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    leftHandSide?: undefined;
                                    operator?: undefined;
                                    rightHandSide?: undefined;
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                            })[];
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        trueBody: {
                            id: number;
                            nodeType: string;
                            src: string;
                            statements: ({
                                expression: {
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    leftHandSide: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    nodeType: string;
                                    operator: string;
                                    rightHandSide: {
                                        arguments: {
                                            condition: {
                                                commonType: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                leftExpression: {
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: never[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                nodeType: string;
                                                operator: string;
                                                rightExpression: {
                                                    expression: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    memberName: string;
                                                    nodeType: string;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            falseExpression: {
                                                expression: {
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: never[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                memberName: string;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            nodeType: string;
                                            src: string;
                                            trueExpression: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        }[];
                                        expression: {
                                            argumentTypes: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            }[];
                                            expression: {
                                                arguments: {
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: never[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                }[];
                                                expression: {
                                                    argumentTypes: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    }[];
                                                    expression: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    memberName: string;
                                                    nodeType: string;
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                names: never[];
                                                nodeType: string;
                                                src: string;
                                                tryCall: boolean;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            memberName: string;
                                            nodeType: string;
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        names: never[];
                                        nodeType: string;
                                        src: string;
                                        tryCall: boolean;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    arguments?: undefined;
                                    expression?: undefined;
                                    kind?: undefined;
                                    names?: undefined;
                                    tryCall?: undefined;
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                            } | {
                                expression: {
                                    arguments: ({
                                        arguments: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        }[];
                                        expression: {
                                            argumentTypes: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            }[];
                                            expression: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            memberName: string;
                                            nodeType: string;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        names: never[];
                                        nodeType: string;
                                        src: string;
                                        tryCall: boolean;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        hexValue?: undefined;
                                        value?: undefined;
                                    } | {
                                        hexValue: string;
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        value: string;
                                        arguments?: undefined;
                                        expression?: undefined;
                                        names?: undefined;
                                        tryCall?: undefined;
                                    })[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: number[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    leftHandSide?: undefined;
                                    operator?: undefined;
                                    rightHandSide?: undefined;
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                            })[];
                        };
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                    })[];
                };
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: ({
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            stateMutability?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            stateMutability: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    })[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    }[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                functionSelector?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: ({
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        initialValue: {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                    } | {
                        expression: {
                            arguments: ({
                                commonType: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftExpression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightExpression: {
                                    hexValue: string;
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    value: string;
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                hexValue?: undefined;
                                kind?: undefined;
                                value?: undefined;
                            } | {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                value: string;
                                commonType?: undefined;
                                leftExpression?: undefined;
                                operator?: undefined;
                                rightExpression?: undefined;
                            })[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: number[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                    } | {
                        expression: {
                            arguments: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            }[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                    })[];
                };
                documentation: {
                    id: number;
                    nodeType: string;
                    src: string;
                    text: string;
                };
                functionSelector: string;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    }[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: never[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: ({
                        expression: {
                            arguments: ({
                                commonType: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftExpression: {
                                    expression: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    memberName: string;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightExpression: {
                                    arguments: {
                                        hexValue: string;
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        value: string;
                                    }[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        expression: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        memberName: string;
                                        nodeType: string;
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                hexValue?: undefined;
                                kind?: undefined;
                                value?: undefined;
                            } | {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                value: string;
                                commonType?: undefined;
                                leftExpression?: undefined;
                                operator?: undefined;
                                rightExpression?: undefined;
                            })[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: number[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                        body?: undefined;
                        condition?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
                    } | {
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                stateMutability: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        initialValue: {
                            arguments: {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                value: string;
                            }[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                typeName: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {};
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                        body?: undefined;
                        condition?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
                    } | {
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                stateMutability: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                        initialValue?: undefined;
                        body?: undefined;
                        condition?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
                    } | {
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                        initialValue?: undefined;
                        body?: undefined;
                        condition?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
                    } | {
                        body: {
                            id: number;
                            nodeType: string;
                            src: string;
                            statements: ({
                                expression: {
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    leftHandSide: {
                                        components: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        }[];
                                        id: number;
                                        isConstant: boolean;
                                        isInlineArray: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        name?: undefined;
                                        overloadedDeclarations?: undefined;
                                        referencedDeclaration?: undefined;
                                    };
                                    nodeType: string;
                                    operator: string;
                                    rightHandSide: {
                                        arguments: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        }[];
                                        expression: {
                                            argumentTypes: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            }[];
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        names: never[];
                                        nodeType: string;
                                        src: string;
                                        tryCall: boolean;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        name?: undefined;
                                        overloadedDeclarations?: undefined;
                                        referencedDeclaration?: undefined;
                                    };
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    arguments?: undefined;
                                    expression?: undefined;
                                    kind?: undefined;
                                    names?: undefined;
                                    tryCall?: undefined;
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                                condition?: undefined;
                                falseBody?: undefined;
                                trueBody?: undefined;
                            } | {
                                condition: {
                                    commonType: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    leftExpression: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    nodeType: string;
                                    operator: string;
                                    rightExpression: {
                                        hexValue: string;
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        value: string;
                                    };
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                falseBody: {
                                    condition: {
                                        commonType: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        leftExpression: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        nodeType: string;
                                        operator: string;
                                        rightExpression: {
                                            hexValue: string;
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            kind: string;
                                            lValueRequested: boolean;
                                            nodeType: string;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            value: string;
                                        };
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    falseBody: {
                                        condition: {
                                            commonType: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            leftExpression: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            nodeType: string;
                                            operator: string;
                                            rightExpression: {
                                                hexValue: string;
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                value: string;
                                            };
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        falseBody: {
                                            id: number;
                                            nodeType: string;
                                            src: string;
                                            statements: {
                                                expression: {
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    leftHandSide: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    nodeType: string;
                                                    operator: string;
                                                    rightHandSide: {
                                                        arguments: {
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            overloadedDeclarations: never[];
                                                            referencedDeclaration: number;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        }[];
                                                        expression: {
                                                            argumentTypes: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            }[];
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            overloadedDeclarations: never[];
                                                            referencedDeclaration: number;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        };
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        kind: string;
                                                        lValueRequested: boolean;
                                                        names: never[];
                                                        nodeType: string;
                                                        src: string;
                                                        tryCall: boolean;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                id: number;
                                                nodeType: string;
                                                src: string;
                                            }[];
                                        };
                                        id: number;
                                        nodeType: string;
                                        src: string;
                                        trueBody: {
                                            id: number;
                                            nodeType: string;
                                            src: string;
                                            statements: {
                                                expression: {
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    leftHandSide: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    nodeType: string;
                                                    operator: string;
                                                    rightHandSide: {
                                                        arguments: ({
                                                            arguments: {
                                                                arguments: ({
                                                                    hexValue: string;
                                                                    id: number;
                                                                    isConstant: boolean;
                                                                    isLValue: boolean;
                                                                    isPure: boolean;
                                                                    kind: string;
                                                                    lValueRequested: boolean;
                                                                    nodeType: string;
                                                                    src: string;
                                                                    typeDescriptions: {
                                                                        typeIdentifier: string;
                                                                        typeString: string;
                                                                    };
                                                                    value: string;
                                                                    name?: undefined;
                                                                    overloadedDeclarations?: undefined;
                                                                    referencedDeclaration?: undefined;
                                                                } | {
                                                                    id: number;
                                                                    name: string;
                                                                    nodeType: string;
                                                                    overloadedDeclarations: never[];
                                                                    referencedDeclaration: number;
                                                                    src: string;
                                                                    typeDescriptions: {
                                                                        typeIdentifier: string;
                                                                        typeString: string;
                                                                    };
                                                                    hexValue?: undefined;
                                                                    isConstant?: undefined;
                                                                    isLValue?: undefined;
                                                                    isPure?: undefined;
                                                                    kind?: undefined;
                                                                    lValueRequested?: undefined;
                                                                    value?: undefined;
                                                                })[];
                                                                expression: {
                                                                    argumentTypes: {
                                                                        typeIdentifier: string;
                                                                        typeString: string;
                                                                    }[];
                                                                    expression: {
                                                                        id: number;
                                                                        name: string;
                                                                        nodeType: string;
                                                                        overloadedDeclarations: never[];
                                                                        referencedDeclaration: number;
                                                                        src: string;
                                                                        typeDescriptions: {
                                                                            typeIdentifier: string;
                                                                            typeString: string;
                                                                        };
                                                                    };
                                                                    id: number;
                                                                    isConstant: boolean;
                                                                    isLValue: boolean;
                                                                    isPure: boolean;
                                                                    lValueRequested: boolean;
                                                                    memberName: string;
                                                                    nodeType: string;
                                                                    src: string;
                                                                    typeDescriptions: {
                                                                        typeIdentifier: string;
                                                                        typeString: string;
                                                                    };
                                                                };
                                                                id: number;
                                                                isConstant: boolean;
                                                                isLValue: boolean;
                                                                isPure: boolean;
                                                                kind: string;
                                                                lValueRequested: boolean;
                                                                names: never[];
                                                                nodeType: string;
                                                                src: string;
                                                                tryCall: boolean;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            }[];
                                                            expression: {
                                                                argumentTypes: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                }[];
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                overloadedDeclarations: never[];
                                                                referencedDeclaration: number;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            };
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            kind: string;
                                                            lValueRequested: boolean;
                                                            names: never[];
                                                            nodeType: string;
                                                            src: string;
                                                            tryCall: boolean;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                            commonType?: undefined;
                                                            leftExpression?: undefined;
                                                            operator?: undefined;
                                                            rightExpression?: undefined;
                                                            name?: undefined;
                                                            overloadedDeclarations?: undefined;
                                                            referencedDeclaration?: undefined;
                                                        } | {
                                                            commonType: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            lValueRequested: boolean;
                                                            leftExpression: {
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                overloadedDeclarations: never[];
                                                                referencedDeclaration: number;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            };
                                                            nodeType: string;
                                                            operator: string;
                                                            rightExpression: {
                                                                hexValue: string;
                                                                id: number;
                                                                isConstant: boolean;
                                                                isLValue: boolean;
                                                                isPure: boolean;
                                                                kind: string;
                                                                lValueRequested: boolean;
                                                                nodeType: string;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                                value: string;
                                                            };
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                            arguments?: undefined;
                                                            expression?: undefined;
                                                            kind?: undefined;
                                                            names?: undefined;
                                                            tryCall?: undefined;
                                                            name?: undefined;
                                                            overloadedDeclarations?: undefined;
                                                            referencedDeclaration?: undefined;
                                                        } | {
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            overloadedDeclarations: never[];
                                                            referencedDeclaration: number;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                            arguments?: undefined;
                                                            expression?: undefined;
                                                            isConstant?: undefined;
                                                            isLValue?: undefined;
                                                            isPure?: undefined;
                                                            kind?: undefined;
                                                            lValueRequested?: undefined;
                                                            names?: undefined;
                                                            tryCall?: undefined;
                                                            commonType?: undefined;
                                                            leftExpression?: undefined;
                                                            operator?: undefined;
                                                            rightExpression?: undefined;
                                                        })[];
                                                        expression: {
                                                            argumentTypes: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            }[];
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            overloadedDeclarations: never[];
                                                            referencedDeclaration: number;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        };
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        kind: string;
                                                        lValueRequested: boolean;
                                                        names: never[];
                                                        nodeType: string;
                                                        src: string;
                                                        tryCall: boolean;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                id: number;
                                                nodeType: string;
                                                src: string;
                                            }[];
                                        };
                                    };
                                    id: number;
                                    nodeType: string;
                                    src: string;
                                    trueBody: {
                                        id: number;
                                        nodeType: string;
                                        src: string;
                                        statements: ({
                                            expression: {
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                leftHandSide: {
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: never[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                nodeType: string;
                                                operator: string;
                                                rightHandSide: {
                                                    arguments: {
                                                        arguments: {
                                                            arguments: {
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                overloadedDeclarations: never[];
                                                                referencedDeclaration: number;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            }[];
                                                            expression: {
                                                                argumentTypes: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                }[];
                                                                id: number;
                                                                isConstant: boolean;
                                                                isLValue: boolean;
                                                                isPure: boolean;
                                                                lValueRequested: boolean;
                                                                nodeType: string;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                                typeName: {
                                                                    id: number;
                                                                    name: string;
                                                                    nodeType: string;
                                                                    src: string;
                                                                    typeDescriptions: {};
                                                                };
                                                            };
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            kind: string;
                                                            lValueRequested: boolean;
                                                            names: never[];
                                                            nodeType: string;
                                                            src: string;
                                                            tryCall: boolean;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        }[];
                                                        expression: {
                                                            argumentTypes: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            }[];
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            lValueRequested: boolean;
                                                            nodeType: string;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                            typeName: {
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                src: string;
                                                                typeDescriptions: {};
                                                            };
                                                        };
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        kind: string;
                                                        lValueRequested: boolean;
                                                        names: never[];
                                                        nodeType: string;
                                                        src: string;
                                                        tryCall: boolean;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    }[];
                                                    expression: {
                                                        argumentTypes: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        }[];
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        nodeType: string;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                        typeName: {
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            src: string;
                                                            typeDescriptions: {};
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    names: never[];
                                                    nodeType: string;
                                                    src: string;
                                                    tryCall: boolean;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                arguments?: undefined;
                                                expression?: undefined;
                                                kind?: undefined;
                                                names?: undefined;
                                                tryCall?: undefined;
                                            };
                                            id: number;
                                            nodeType: string;
                                            src: string;
                                        } | {
                                            expression: {
                                                arguments: ({
                                                    commonType: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    leftExpression: {
                                                        commonType: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        leftExpression: {
                                                            expression: {
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                overloadedDeclarations: never[];
                                                                referencedDeclaration: number;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            };
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            lValueRequested: boolean;
                                                            memberName: string;
                                                            nodeType: string;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        };
                                                        nodeType: string;
                                                        operator: string;
                                                        rightExpression: {
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            overloadedDeclarations: never[];
                                                            referencedDeclaration: number;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        };
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    nodeType: string;
                                                    operator: string;
                                                    rightExpression: {
                                                        commonType: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        leftExpression: {
                                                            baseExpression: {
                                                                baseExpression: {
                                                                    id: number;
                                                                    name: string;
                                                                    nodeType: string;
                                                                    overloadedDeclarations: never[];
                                                                    referencedDeclaration: number;
                                                                    src: string;
                                                                    typeDescriptions: {
                                                                        typeIdentifier: string;
                                                                        typeString: string;
                                                                    };
                                                                };
                                                                id: number;
                                                                indexExpression: {
                                                                    id: number;
                                                                    name: string;
                                                                    nodeType: string;
                                                                    overloadedDeclarations: never[];
                                                                    referencedDeclaration: number;
                                                                    src: string;
                                                                    typeDescriptions: {
                                                                        typeIdentifier: string;
                                                                        typeString: string;
                                                                    };
                                                                };
                                                                isConstant: boolean;
                                                                isLValue: boolean;
                                                                isPure: boolean;
                                                                lValueRequested: boolean;
                                                                nodeType: string;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            };
                                                            id: number;
                                                            indexExpression: {
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                overloadedDeclarations: never[];
                                                                referencedDeclaration: number;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            };
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            lValueRequested: boolean;
                                                            nodeType: string;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        };
                                                        nodeType: string;
                                                        operator: string;
                                                        rightExpression: {
                                                            hexValue: string;
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            kind: string;
                                                            lValueRequested: boolean;
                                                            nodeType: string;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                            value: string;
                                                        };
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                    hexValue?: undefined;
                                                    kind?: undefined;
                                                    value?: undefined;
                                                } | {
                                                    hexValue: string;
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    nodeType: string;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                    value: string;
                                                    commonType?: undefined;
                                                    leftExpression?: undefined;
                                                    operator?: undefined;
                                                    rightExpression?: undefined;
                                                })[];
                                                expression: {
                                                    argumentTypes: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    }[];
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: number[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                names: never[];
                                                nodeType: string;
                                                src: string;
                                                tryCall: boolean;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                leftHandSide?: undefined;
                                                operator?: undefined;
                                                rightHandSide?: undefined;
                                            };
                                            id: number;
                                            nodeType: string;
                                            src: string;
                                        })[];
                                    };
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                                trueBody: {
                                    id: number;
                                    nodeType: string;
                                    src: string;
                                    statements: ({
                                        expression: {
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            leftHandSide: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            nodeType: string;
                                            operator: string;
                                            rightHandSide: {
                                                arguments: {
                                                    arguments: {
                                                        arguments: {
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            overloadedDeclarations: never[];
                                                            referencedDeclaration: number;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        }[];
                                                        expression: {
                                                            argumentTypes: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            }[];
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            lValueRequested: boolean;
                                                            nodeType: string;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                            typeName: {
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                src: string;
                                                                typeDescriptions: {};
                                                            };
                                                        };
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        kind: string;
                                                        lValueRequested: boolean;
                                                        names: never[];
                                                        nodeType: string;
                                                        src: string;
                                                        tryCall: boolean;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    }[];
                                                    expression: {
                                                        argumentTypes: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        }[];
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        nodeType: string;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                        typeName: {
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            src: string;
                                                            typeDescriptions: {};
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    names: never[];
                                                    nodeType: string;
                                                    src: string;
                                                    tryCall: boolean;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                }[];
                                                expression: {
                                                    argumentTypes: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    }[];
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    nodeType: string;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                    typeName: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        src: string;
                                                        typeDescriptions: {};
                                                    };
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                names: never[];
                                                nodeType: string;
                                                src: string;
                                                tryCall: boolean;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            arguments?: undefined;
                                            expression?: undefined;
                                            kind?: undefined;
                                            names?: undefined;
                                            tryCall?: undefined;
                                        };
                                        id: number;
                                        nodeType: string;
                                        src: string;
                                        assignments?: undefined;
                                        declarations?: undefined;
                                        AST?: undefined;
                                        evmVersion?: undefined;
                                        externalReferences?: undefined;
                                    } | {
                                        expression: {
                                            arguments: ({
                                                commonType: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                leftExpression: {
                                                    arguments: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    }[];
                                                    expression: {
                                                        argumentTypes: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        }[];
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        nodeType: string;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                        typeName: {
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            src: string;
                                                            typeDescriptions: {};
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    names: never[];
                                                    nodeType: string;
                                                    src: string;
                                                    tryCall: boolean;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                nodeType: string;
                                                operator: string;
                                                rightExpression: {
                                                    arguments: {
                                                        hexValue: string;
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        kind: string;
                                                        lValueRequested: boolean;
                                                        nodeType: string;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                        value: string;
                                                    }[];
                                                    expression: {
                                                        argumentTypes: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        }[];
                                                        expression: {
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            overloadedDeclarations: never[];
                                                            referencedDeclaration: number;
                                                            src: string;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        };
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        memberName: string;
                                                        nodeType: string;
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    names: never[];
                                                    nodeType: string;
                                                    src: string;
                                                    tryCall: boolean;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                hexValue?: undefined;
                                                kind?: undefined;
                                                value?: undefined;
                                            } | {
                                                hexValue: string;
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                value: string;
                                                commonType?: undefined;
                                                leftExpression?: undefined;
                                                operator?: undefined;
                                                rightExpression?: undefined;
                                            })[];
                                            expression: {
                                                argumentTypes: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                }[];
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: number[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            kind: string;
                                            lValueRequested: boolean;
                                            names: never[];
                                            nodeType: string;
                                            src: string;
                                            tryCall: boolean;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            leftHandSide?: undefined;
                                            operator?: undefined;
                                            rightHandSide?: undefined;
                                        };
                                        id: number;
                                        nodeType: string;
                                        src: string;
                                        assignments?: undefined;
                                        declarations?: undefined;
                                        AST?: undefined;
                                        evmVersion?: undefined;
                                        externalReferences?: undefined;
                                    } | {
                                        expression: {
                                            arguments: ({
                                                commonType: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                leftExpression: {
                                                    arguments: {
                                                        hexValue: string;
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        kind: string;
                                                        lValueRequested: boolean;
                                                        nodeType: string;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                        value: string;
                                                    }[];
                                                    expression: {
                                                        argumentTypes: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        }[];
                                                        expression: {
                                                            arguments: {
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                overloadedDeclarations: never[];
                                                                referencedDeclaration: number;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            }[];
                                                            expression: {
                                                                argumentTypes: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                }[];
                                                                id: number;
                                                                isConstant: boolean;
                                                                isLValue: boolean;
                                                                isPure: boolean;
                                                                lValueRequested: boolean;
                                                                nodeType: string;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                                typeName: {
                                                                    id: number;
                                                                    name: string;
                                                                    nodeType: string;
                                                                    src: string;
                                                                    typeDescriptions: {};
                                                                };
                                                            };
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            kind: string;
                                                            lValueRequested: boolean;
                                                            names: never[];
                                                            nodeType: string;
                                                            src: string;
                                                            tryCall: boolean;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        };
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        memberName: string;
                                                        nodeType: string;
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    names: never[];
                                                    nodeType: string;
                                                    src: string;
                                                    tryCall: boolean;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                nodeType: string;
                                                operator: string;
                                                rightExpression: {
                                                    expression: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    memberName: string;
                                                    nodeType: string;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                hexValue?: undefined;
                                                kind?: undefined;
                                                value?: undefined;
                                            } | {
                                                hexValue: string;
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                value: string;
                                                commonType?: undefined;
                                                leftExpression?: undefined;
                                                operator?: undefined;
                                                rightExpression?: undefined;
                                            })[];
                                            expression: {
                                                argumentTypes: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                }[];
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: number[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            kind: string;
                                            lValueRequested: boolean;
                                            names: never[];
                                            nodeType: string;
                                            src: string;
                                            tryCall: boolean;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            leftHandSide?: undefined;
                                            operator?: undefined;
                                            rightHandSide?: undefined;
                                        };
                                        id: number;
                                        nodeType: string;
                                        src: string;
                                        assignments?: undefined;
                                        declarations?: undefined;
                                        AST?: undefined;
                                        evmVersion?: undefined;
                                        externalReferences?: undefined;
                                    } | {
                                        assignments: number[];
                                        declarations: {
                                            constant: boolean;
                                            id: number;
                                            mutability: string;
                                            name: string;
                                            nameLocation: string;
                                            nodeType: string;
                                            scope: number;
                                            src: string;
                                            stateVariable: boolean;
                                            storageLocation: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            typeName: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            visibility: string;
                                        }[];
                                        id: number;
                                        nodeType: string;
                                        src: string;
                                        expression?: undefined;
                                        AST?: undefined;
                                        evmVersion?: undefined;
                                        externalReferences?: undefined;
                                    } | {
                                        AST: {
                                            nodeType: string;
                                            src: string;
                                            statements: {
                                                nodeType: string;
                                                src: string;
                                                value: {
                                                    arguments: {
                                                        arguments: ({
                                                            arguments: {
                                                                name: string;
                                                                nodeType: string;
                                                                src: string;
                                                            }[];
                                                            functionName: {
                                                                name: string;
                                                                nodeType: string;
                                                                src: string;
                                                            };
                                                            nodeType: string;
                                                            src: string;
                                                            kind?: undefined;
                                                            type?: undefined;
                                                            value?: undefined;
                                                        } | {
                                                            kind: string;
                                                            nodeType: string;
                                                            src: string;
                                                            type: string;
                                                            value: string;
                                                            arguments?: undefined;
                                                            functionName?: undefined;
                                                        })[];
                                                        functionName: {
                                                            name: string;
                                                            nodeType: string;
                                                            src: string;
                                                        };
                                                        nodeType: string;
                                                        src: string;
                                                    }[];
                                                    functionName: {
                                                        name: string;
                                                        nodeType: string;
                                                        src: string;
                                                    };
                                                    nodeType: string;
                                                    src: string;
                                                };
                                                variableNames: {
                                                    name: string;
                                                    nodeType: string;
                                                    src: string;
                                                }[];
                                            }[];
                                        };
                                        evmVersion: string;
                                        externalReferences: {
                                            declaration: number;
                                            isOffset: boolean;
                                            isSlot: boolean;
                                            src: string;
                                            valueSize: number;
                                        }[];
                                        id: number;
                                        nodeType: string;
                                        src: string;
                                        expression?: undefined;
                                        assignments?: undefined;
                                        declarations?: undefined;
                                    } | {
                                        expression: {
                                            arguments: ({
                                                commonType: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                leftExpression: {
                                                    arguments: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    }[];
                                                    expression: {
                                                        argumentTypes: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        }[];
                                                        expression: {
                                                            arguments: {
                                                                hexValue: string;
                                                                id: number;
                                                                isConstant: boolean;
                                                                isLValue: boolean;
                                                                isPure: boolean;
                                                                kind: string;
                                                                lValueRequested: boolean;
                                                                nodeType: string;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                                value: string;
                                                            }[];
                                                            expression: {
                                                                argumentTypes: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                }[];
                                                                expression: {
                                                                    arguments: {
                                                                        id: number;
                                                                        name: string;
                                                                        nodeType: string;
                                                                        overloadedDeclarations: never[];
                                                                        referencedDeclaration: number;
                                                                        src: string;
                                                                        typeDescriptions: {
                                                                            typeIdentifier: string;
                                                                            typeString: string;
                                                                        };
                                                                    }[];
                                                                    expression: {
                                                                        argumentTypes: {
                                                                            typeIdentifier: string;
                                                                            typeString: string;
                                                                        }[];
                                                                        id: number;
                                                                        isConstant: boolean;
                                                                        isLValue: boolean;
                                                                        isPure: boolean;
                                                                        lValueRequested: boolean;
                                                                        nodeType: string;
                                                                        src: string;
                                                                        typeDescriptions: {
                                                                            typeIdentifier: string;
                                                                            typeString: string;
                                                                        };
                                                                        typeName: {
                                                                            id: number;
                                                                            name: string;
                                                                            nodeType: string;
                                                                            src: string;
                                                                            typeDescriptions: {};
                                                                        };
                                                                    };
                                                                    id: number;
                                                                    isConstant: boolean;
                                                                    isLValue: boolean;
                                                                    isPure: boolean;
                                                                    kind: string;
                                                                    lValueRequested: boolean;
                                                                    names: never[];
                                                                    nodeType: string;
                                                                    src: string;
                                                                    tryCall: boolean;
                                                                    typeDescriptions: {
                                                                        typeIdentifier: string;
                                                                        typeString: string;
                                                                    };
                                                                };
                                                                id: number;
                                                                isConstant: boolean;
                                                                isLValue: boolean;
                                                                isPure: boolean;
                                                                lValueRequested: boolean;
                                                                memberName: string;
                                                                nodeType: string;
                                                                referencedDeclaration: number;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            };
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            kind: string;
                                                            lValueRequested: boolean;
                                                            names: never[];
                                                            nodeType: string;
                                                            src: string;
                                                            tryCall: boolean;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        };
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        memberName: string;
                                                        nodeType: string;
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    names: never[];
                                                    nodeType: string;
                                                    src: string;
                                                    tryCall: boolean;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                nodeType: string;
                                                operator: string;
                                                rightExpression: {
                                                    expression: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    memberName: string;
                                                    nodeType: string;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                hexValue?: undefined;
                                                kind?: undefined;
                                                value?: undefined;
                                            } | {
                                                hexValue: string;
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                value: string;
                                                commonType?: undefined;
                                                leftExpression?: undefined;
                                                operator?: undefined;
                                                rightExpression?: undefined;
                                            })[];
                                            expression: {
                                                argumentTypes: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                }[];
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: number[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            kind: string;
                                            lValueRequested: boolean;
                                            names: never[];
                                            nodeType: string;
                                            src: string;
                                            tryCall: boolean;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            leftHandSide?: undefined;
                                            operator?: undefined;
                                            rightHandSide?: undefined;
                                        };
                                        id: number;
                                        nodeType: string;
                                        src: string;
                                        assignments?: undefined;
                                        declarations?: undefined;
                                        AST?: undefined;
                                        evmVersion?: undefined;
                                        externalReferences?: undefined;
                                    } | {
                                        AST: {
                                            nodeType: string;
                                            src: string;
                                            statements: {
                                                nodeType: string;
                                                src: string;
                                                value: {
                                                    arguments: ({
                                                        arguments: {
                                                            name: string;
                                                            nodeType: string;
                                                            src: string;
                                                        }[];
                                                        functionName: {
                                                            name: string;
                                                            nodeType: string;
                                                            src: string;
                                                        };
                                                        nodeType: string;
                                                        src: string;
                                                        kind?: undefined;
                                                        type?: undefined;
                                                        value?: undefined;
                                                    } | {
                                                        kind: string;
                                                        nodeType: string;
                                                        src: string;
                                                        type: string;
                                                        value: string;
                                                        arguments?: undefined;
                                                        functionName?: undefined;
                                                    })[];
                                                    functionName: {
                                                        name: string;
                                                        nodeType: string;
                                                        src: string;
                                                    };
                                                    nodeType: string;
                                                    src: string;
                                                };
                                                variableNames: {
                                                    name: string;
                                                    nodeType: string;
                                                    src: string;
                                                }[];
                                            }[];
                                        };
                                        evmVersion: string;
                                        externalReferences: {
                                            declaration: number;
                                            isOffset: boolean;
                                            isSlot: boolean;
                                            src: string;
                                            valueSize: number;
                                        }[];
                                        id: number;
                                        nodeType: string;
                                        src: string;
                                        expression?: undefined;
                                        assignments?: undefined;
                                        declarations?: undefined;
                                    } | {
                                        expression: {
                                            arguments: ({
                                                commonType: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                leftExpression: {
                                                    arguments: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    }[];
                                                    expression: {
                                                        argumentTypes: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        }[];
                                                        expression: {
                                                            arguments: {
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                overloadedDeclarations: never[];
                                                                referencedDeclaration: number;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            }[];
                                                            expression: {
                                                                argumentTypes: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                }[];
                                                                id: number;
                                                                name: string;
                                                                nodeType: string;
                                                                overloadedDeclarations: never[];
                                                                referencedDeclaration: number;
                                                                src: string;
                                                                typeDescriptions: {
                                                                    typeIdentifier: string;
                                                                    typeString: string;
                                                                };
                                                            };
                                                            id: number;
                                                            isConstant: boolean;
                                                            isLValue: boolean;
                                                            isPure: boolean;
                                                            kind: string;
                                                            lValueRequested: boolean;
                                                            names: never[];
                                                            nodeType: string;
                                                            src: string;
                                                            tryCall: boolean;
                                                            typeDescriptions: {
                                                                typeIdentifier: string;
                                                                typeString: string;
                                                            };
                                                        };
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        memberName: string;
                                                        nodeType: string;
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    names: never[];
                                                    nodeType: string;
                                                    src: string;
                                                    tryCall: boolean;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                nodeType: string;
                                                operator: string;
                                                rightExpression: {
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: never[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                hexValue?: undefined;
                                                kind?: undefined;
                                                value?: undefined;
                                            } | {
                                                hexValue: string;
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                kind: string;
                                                lValueRequested: boolean;
                                                nodeType: string;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                value: string;
                                                commonType?: undefined;
                                                leftExpression?: undefined;
                                                operator?: undefined;
                                                rightExpression?: undefined;
                                            })[];
                                            expression: {
                                                argumentTypes: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                }[];
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: number[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            kind: string;
                                            lValueRequested: boolean;
                                            names: never[];
                                            nodeType: string;
                                            src: string;
                                            tryCall: boolean;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            leftHandSide?: undefined;
                                            operator?: undefined;
                                            rightHandSide?: undefined;
                                        };
                                        id: number;
                                        nodeType: string;
                                        src: string;
                                        assignments?: undefined;
                                        declarations?: undefined;
                                        AST?: undefined;
                                        evmVersion?: undefined;
                                        externalReferences?: undefined;
                                    })[];
                                };
                                expression?: undefined;
                            } | {
                                expression: {
                                    arguments: ({
                                        commonType: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        leftExpression: {
                                            commonType: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            leftExpression: {
                                                commonType: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                leftExpression: {
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: never[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                nodeType: string;
                                                operator: string;
                                                rightExpression: {
                                                    id: number;
                                                    name: string;
                                                    nodeType: string;
                                                    overloadedDeclarations: never[];
                                                    referencedDeclaration: number;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            nodeType: string;
                                            operator: string;
                                            rightExpression: {
                                                commonType: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                                id: number;
                                                isConstant: boolean;
                                                isLValue: boolean;
                                                isPure: boolean;
                                                lValueRequested: boolean;
                                                leftExpression: {
                                                    baseExpression: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    id: number;
                                                    indexExpression: {
                                                        id: number;
                                                        name: string;
                                                        nodeType: string;
                                                        overloadedDeclarations: never[];
                                                        referencedDeclaration: number;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                    };
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    lValueRequested: boolean;
                                                    nodeType: string;
                                                    src: string;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                nodeType: string;
                                                operator: string;
                                                rightExpression: {
                                                    arguments: {
                                                        hexValue: string;
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        kind: string;
                                                        lValueRequested: boolean;
                                                        nodeType: string;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                        value: string;
                                                    }[];
                                                    expression: {
                                                        argumentTypes: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        }[];
                                                        id: number;
                                                        isConstant: boolean;
                                                        isLValue: boolean;
                                                        isPure: boolean;
                                                        lValueRequested: boolean;
                                                        nodeType: string;
                                                        src: string;
                                                        typeDescriptions: {
                                                            typeIdentifier: string;
                                                            typeString: string;
                                                        };
                                                        typeName: {
                                                            id: number;
                                                            name: string;
                                                            nodeType: string;
                                                            src: string;
                                                            typeDescriptions: {};
                                                        };
                                                    };
                                                    id: number;
                                                    isConstant: boolean;
                                                    isLValue: boolean;
                                                    isPure: boolean;
                                                    kind: string;
                                                    lValueRequested: boolean;
                                                    names: never[];
                                                    nodeType: string;
                                                    src: string;
                                                    tryCall: boolean;
                                                    typeDescriptions: {
                                                        typeIdentifier: string;
                                                        typeString: string;
                                                    };
                                                };
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        nodeType: string;
                                        operator: string;
                                        rightExpression: {
                                            commonType: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                            id: number;
                                            isConstant: boolean;
                                            isLValue: boolean;
                                            isPure: boolean;
                                            lValueRequested: boolean;
                                            leftExpression: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            nodeType: string;
                                            operator: string;
                                            rightExpression: {
                                                id: number;
                                                name: string;
                                                nodeType: string;
                                                overloadedDeclarations: never[];
                                                referencedDeclaration: number;
                                                src: string;
                                                typeDescriptions: {
                                                    typeIdentifier: string;
                                                    typeString: string;
                                                };
                                            };
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        hexValue?: undefined;
                                        kind?: undefined;
                                        value?: undefined;
                                    } | {
                                        hexValue: string;
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        value: string;
                                        commonType?: undefined;
                                        leftExpression?: undefined;
                                        operator?: undefined;
                                        rightExpression?: undefined;
                                    })[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: number[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    leftHandSide?: undefined;
                                    operator?: undefined;
                                    rightHandSide?: undefined;
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                                condition?: undefined;
                                falseBody?: undefined;
                                trueBody?: undefined;
                            } | {
                                expression: {
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    leftHandSide: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        components?: undefined;
                                        isConstant?: undefined;
                                        isInlineArray?: undefined;
                                        isLValue?: undefined;
                                        isPure?: undefined;
                                        lValueRequested?: undefined;
                                    };
                                    nodeType: string;
                                    operator: string;
                                    rightHandSide: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        arguments?: undefined;
                                        expression?: undefined;
                                        isConstant?: undefined;
                                        isLValue?: undefined;
                                        isPure?: undefined;
                                        kind?: undefined;
                                        lValueRequested?: undefined;
                                        names?: undefined;
                                        tryCall?: undefined;
                                    };
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    arguments?: undefined;
                                    expression?: undefined;
                                    kind?: undefined;
                                    names?: undefined;
                                    tryCall?: undefined;
                                };
                                id: number;
                                nodeType: string;
                                src: string;
                                condition?: undefined;
                                falseBody?: undefined;
                                trueBody?: undefined;
                            })[];
                        };
                        condition: {
                            commonType: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            leftExpression: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            nodeType: string;
                            operator: string;
                            rightExpression: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        initializationExpression: {
                            expression: {
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftHandSide: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightHandSide: {
                                    hexValue: string;
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    value: string;
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                        };
                        loopExpression: {
                            expression: {
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                nodeType: string;
                                operator: string;
                                prefix: boolean;
                                src: string;
                                subExpression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                        };
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                    })[];
                };
                documentation: {
                    id: number;
                    nodeType: string;
                    src: string;
                    text: string;
                };
                functionSelector: string;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    }[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: never[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: ({
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        initialValue: {
                            arguments: never[];
                            expression: {
                                argumentTypes: never[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            commonType?: undefined;
                            leftExpression?: undefined;
                            operator?: undefined;
                            rightExpression?: undefined;
                        };
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                    } | {
                        expression: {
                            arguments: {
                                arguments: ({
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    arguments?: undefined;
                                    expression?: undefined;
                                    isConstant?: undefined;
                                    isLValue?: undefined;
                                    isPure?: undefined;
                                    kind?: undefined;
                                    lValueRequested?: undefined;
                                    names?: undefined;
                                    tryCall?: undefined;
                                } | {
                                    arguments: never[];
                                    expression: {
                                        argumentTypes: never[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    name?: undefined;
                                    overloadedDeclarations?: undefined;
                                    referencedDeclaration?: undefined;
                                })[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            }[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: number[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                    } | {
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        initialValue: {
                            commonType: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            leftExpression: {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            nodeType: string;
                            operator: string;
                            rightExpression: {
                                arguments: never[];
                                expression: {
                                    argumentTypes: never[];
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            arguments?: undefined;
                            expression?: undefined;
                            kind?: undefined;
                            names?: undefined;
                            tryCall?: undefined;
                        };
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                    } | {
                        expression: {
                            arguments: {
                                arguments: {
                                    arguments: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    }[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        expression: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        memberName: string;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                }[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    typeName: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {};
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            }[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: number[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                    })[];
                };
                documentation: {
                    id: number;
                    nodeType: string;
                    src: string;
                    text: string;
                };
                functionSelector: string;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: ({
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            stateMutability: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            pathNode?: undefined;
                            referencedDeclaration?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            stateMutability?: undefined;
                            pathNode?: undefined;
                            referencedDeclaration?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            nodeType: string;
                            pathNode: {
                                id: number;
                                name: string;
                                nodeType: string;
                                referencedDeclaration: number;
                                src: string;
                            };
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            name?: undefined;
                            stateMutability?: undefined;
                        };
                        visibility: string;
                    })[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    }[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: ({
                        expression: {
                            arguments: ({
                                commonType: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                leftExpression: {
                                    baseExpression: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    indexExpression: {
                                        expression: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        memberName: string;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                nodeType: string;
                                operator: string;
                                rightExpression: {
                                    arguments: {
                                        hexValue: string;
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        kind: string;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        value: string;
                                    }[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                        typeName: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            src: string;
                                            typeDescriptions: {};
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                hexValue?: undefined;
                                kind?: undefined;
                                value?: undefined;
                            } | {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                value: string;
                                commonType?: undefined;
                                leftExpression?: undefined;
                                operator?: undefined;
                                rightExpression?: undefined;
                            })[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: number[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            leftHandSide?: undefined;
                            operator?: undefined;
                            rightHandSide?: undefined;
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        eventCall?: undefined;
                    } | {
                        expression: {
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            leftHandSide: {
                                baseExpression: {
                                    baseExpression: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    indexExpression: {
                                        expression: {
                                            id: number;
                                            name: string;
                                            nodeType: string;
                                            overloadedDeclarations: never[];
                                            referencedDeclaration: number;
                                            src: string;
                                            typeDescriptions: {
                                                typeIdentifier: string;
                                                typeString: string;
                                            };
                                        };
                                        id: number;
                                        isConstant: boolean;
                                        isLValue: boolean;
                                        isPure: boolean;
                                        lValueRequested: boolean;
                                        memberName: string;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                indexExpression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            nodeType: string;
                            operator: string;
                            rightHandSide: {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                value: string;
                            };
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            arguments?: undefined;
                            expression?: undefined;
                            kind?: undefined;
                            names?: undefined;
                            tryCall?: undefined;
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        eventCall?: undefined;
                    } | {
                        eventCall: {
                            arguments: ({
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                expression?: undefined;
                                isConstant?: undefined;
                                isLValue?: undefined;
                                isPure?: undefined;
                                lValueRequested?: undefined;
                                memberName?: undefined;
                            } | {
                                expression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                memberName: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                name?: undefined;
                                overloadedDeclarations?: undefined;
                                referencedDeclaration?: undefined;
                            })[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                    })[];
                };
                documentation: {
                    id: number;
                    nodeType: string;
                    src: string;
                    text: string;
                };
                functionSelector: string;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    }[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: never[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: ({
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        nodeType: string;
                        src: string;
                        AST?: undefined;
                        evmVersion?: undefined;
                        externalReferences?: undefined;
                        expression?: undefined;
                        functionReturnParameters?: undefined;
                    } | {
                        AST: {
                            nodeType: string;
                            src: string;
                            statements: {
                                nodeType: string;
                                src: string;
                                value: {
                                    arguments: never[];
                                    functionName: {
                                        name: string;
                                        nodeType: string;
                                        src: string;
                                    };
                                    nodeType: string;
                                    src: string;
                                };
                                variableNames: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                }[];
                            }[];
                        };
                        evmVersion: string;
                        externalReferences: {
                            declaration: number;
                            isOffset: boolean;
                            isSlot: boolean;
                            src: string;
                            valueSize: number;
                        }[];
                        id: number;
                        nodeType: string;
                        src: string;
                        assignments?: undefined;
                        declarations?: undefined;
                        expression?: undefined;
                        functionReturnParameters?: undefined;
                    } | {
                        expression: {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        functionReturnParameters: number;
                        id: number;
                        nodeType: string;
                        src: string;
                        assignments?: undefined;
                        declarations?: undefined;
                        AST?: undefined;
                        evmVersion?: undefined;
                        externalReferences?: undefined;
                    })[];
                };
                documentation: {
                    id: number;
                    nodeType: string;
                    src: string;
                    text: string;
                };
                functionSelector: string;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: never[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    }[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: {
                        expression: {
                            arguments: {
                                arguments: ({
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    arguments?: undefined;
                                    expression?: undefined;
                                    isConstant?: undefined;
                                    isLValue?: undefined;
                                    isPure?: undefined;
                                    kind?: undefined;
                                    lValueRequested?: undefined;
                                    names?: undefined;
                                    tryCall?: undefined;
                                } | {
                                    arguments: never[];
                                    expression: {
                                        argumentTypes: never[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    name?: undefined;
                                    overloadedDeclarations?: undefined;
                                    referencedDeclaration?: undefined;
                                })[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    expression: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    memberName: string;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            }[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        functionReturnParameters: number;
                        id: number;
                        nodeType: string;
                        src: string;
                    }[];
                };
                functionSelector: string;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: never[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    }[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
                documentation?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: ({
                        assignments: number[];
                        declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            visibility: string;
                        }[];
                        id: number;
                        initialValue: {
                            arguments: {
                                arguments: ({
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    arguments?: undefined;
                                    expression?: undefined;
                                    isConstant?: undefined;
                                    isLValue?: undefined;
                                    isPure?: undefined;
                                    kind?: undefined;
                                    lValueRequested?: undefined;
                                    names?: undefined;
                                    tryCall?: undefined;
                                } | {
                                    arguments: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    }[];
                                    expression: {
                                        argumentTypes: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        }[];
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    name?: undefined;
                                    overloadedDeclarations?: undefined;
                                    referencedDeclaration?: undefined;
                                })[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    expression: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                            typeIdentifier: string;
                                            typeString: string;
                                        };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    memberName: string;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            }[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                        functionReturnParameters?: undefined;
                    } | {
                        expression: {
                            arguments: ({
                                arguments: {
                                    hexValue: string;
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    value: string;
                                }[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    typeName: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        src: string;
                                        typeDescriptions: {};
                                    };
                                    name?: undefined;
                                    overloadedDeclarations?: undefined;
                                    referencedDeclaration?: undefined;
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                name?: undefined;
                                overloadedDeclarations?: undefined;
                                referencedDeclaration?: undefined;
                            } | {
                                arguments: never[];
                                expression: {
                                    argumentTypes: never[];
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                    isConstant?: undefined;
                                    isLValue?: undefined;
                                    isPure?: undefined;
                                    lValueRequested?: undefined;
                                    typeName?: undefined;
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                name?: undefined;
                                overloadedDeclarations?: undefined;
                                referencedDeclaration?: undefined;
                            } | {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                                arguments?: undefined;
                                expression?: undefined;
                                isConstant?: undefined;
                                isLValue?: undefined;
                                isPure?: undefined;
                                kind?: undefined;
                                lValueRequested?: undefined;
                                names?: undefined;
                                tryCall?: undefined;
                            })[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                expression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                memberName: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        functionReturnParameters: number;
                        id: number;
                        nodeType: string;
                        src: string;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                    })[];
                };
                documentation: {
                    id: number;
                    nodeType: string;
                    src: string;
                    text: string;
                };
                functionSelector: string;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: ({
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            stateMutability: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            pathNode?: undefined;
                            referencedDeclaration?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            stateMutability?: undefined;
                            pathNode?: undefined;
                            referencedDeclaration?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            nodeType: string;
                            pathNode: {
                                id: number;
                                name: string;
                                nodeType: string;
                                referencedDeclaration: number;
                                src: string;
                            };
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            name?: undefined;
                            stateMutability?: undefined;
                        };
                        visibility: string;
                    })[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    }[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
            } | {
                id: number;
                nodeType: string;
                src: string;
                body: {
                    id: number;
                    nodeType: string;
                    src: string;
                    statements: {
                        expression: {
                            arguments: {
                                arguments: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                }[];
                                expression: {
                                    argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    }[];
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                    };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            }[];
                            expression: {
                                argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                }[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        functionReturnParameters: number;
                        id: number;
                        nodeType: string;
                        src: string;
                    }[];
                };
                documentation: {
                    id: number;
                    nodeType: string;
                    src: string;
                    text: string;
                };
                functionSelector: string;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                parameters: {
                    id: number;
                    nodeType: string;
                    parameters: ({
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            stateMutability: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            pathNode?: undefined;
                            referencedDeclaration?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            stateMutability?: undefined;
                            pathNode?: undefined;
                            referencedDeclaration?: undefined;
                        };
                        visibility: string;
                    } | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            nodeType: string;
                            pathNode: {
                                id: number;
                                name: string;
                                nodeType: string;
                                referencedDeclaration: number;
                                src: string;
                            };
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                            name?: undefined;
                            stateMutability?: undefined;
                        };
                        visibility: string;
                    })[];
                    src: string;
                };
                returnParameters: {
                    id: number;
                    nodeType: string;
                    parameters: {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                        };
                        typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                            };
                        };
                        visibility: string;
                    }[];
                    src: string;
                };
                scope: number;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                anonymous?: undefined;
            })[];
            abstract: boolean;
            baseContracts: {
                baseName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    referencedDeclaration: number;
                    src: string;
                };
                id: number;
                nodeType: string;
                src: string;
            }[];
            canonicalName: string;
            contractDependencies: never[];
            contractKind: string;
            documentation: {
                id: number;
                nodeType: string;
                src: string;
                text: string;
            };
            fullyImplemented: boolean;
            linearizedBaseContracts: number[];
            name: string;
            nameLocation: string;
            scope: number;
            usedErrors: never[];
            literals?: undefined;
            absolutePath?: undefined;
            file?: undefined;
            sourceUnit?: undefined;
            symbolAliases?: undefined;
            unitAlias?: undefined;
        })[];
        license: string;
    };
    id: number;
};
