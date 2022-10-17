import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type PayeeStruct = {
    account: string;
    shares: BigNumberish;
    transfersAllowedWhileLocked: boolean;
};
export declare type PayeeStructOutput = [string, number, boolean] & {
    account: string;
    shares: number;
    transfersAllowedWhileLocked: boolean;
};
export declare type SliceParamsStruct = {
    payees: PayeeStruct[];
    minimumShares: BigNumberish;
    currencies: string[];
    releaseTimelock: BigNumberish;
    transferTimelock: BigNumberish;
    controller: string;
    slicerFlags: BigNumberish;
    sliceCoreFlags: BigNumberish;
};
export declare type SliceParamsStructOutput = [
    PayeeStructOutput[],
    BigNumber,
    string[],
    BigNumber,
    number,
    string,
    number,
    number
] & {
    payees: PayeeStructOutput[];
    minimumShares: BigNumber;
    currencies: string[];
    releaseTimelock: BigNumber;
    transferTimelock: number;
    controller: string;
    slicerFlags: number;
    sliceCoreFlags: number;
};
export interface SliceCoreInterface extends utils.Interface {
    contractName: "SliceCore";
    functions: {
        "_setBasePath(string)": FunctionFragment;
        "_togglePause()": FunctionFragment;
        "balanceOf(address,uint256)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "controller(uint256)": FunctionFragment;
        "exists(uint256)": FunctionFragment;
        "initialize()": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "paused()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "reslice(uint256,address[],int32[])": FunctionFragment;
        "royaltyInfo(uint256,uint256)": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "safeTransferFromUnreleased(address,address,uint256,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setController(uint256,address)": FunctionFragment;
        "setRoyalty(uint256,bool,bool,uint256)": FunctionFragment;
        "slice(((address,uint32,bool)[],uint256,address[],uint256,uint40,address,uint8,uint8))": FunctionFragment;
        "slicerBatchTransfer(address,address[],uint256,uint256[],bool)": FunctionFragment;
        "slicerManager()": FunctionFragment;
        "slicerVersion()": FunctionFragment;
        "slicers(uint256)": FunctionFragment;
        "supply()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "totalSupply(uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "uri(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_setBasePath", values: [string]): string;
    encodeFunctionData(functionFragment: "_togglePause", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "controller", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "exists", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "reslice", values: [BigNumberish, string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "royaltyInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "safeTransferFromUnreleased", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setController", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "setRoyalty", values: [BigNumberish, boolean, boolean, BigNumberish]): string;
    encodeFunctionData(functionFragment: "slice", values: [SliceParamsStruct]): string;
    encodeFunctionData(functionFragment: "slicerBatchTransfer", values: [string, string[], BigNumberish, BigNumberish[], boolean]): string;
    encodeFunctionData(functionFragment: "slicerManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "slicerVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "slicers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supply", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "totalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_setBasePath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_togglePause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reslice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "royaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFromUnreleased", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyalty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slicerBatchTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slicerManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slicerVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slicers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "RoyaltySet(uint256,bool,bool,uint256)": EventFragment;
        "SlicerControllerSet(uint256,address)": EventFragment;
        "TokenResliced(uint256,address[],int32[])": EventFragment;
        "TokenSliced(address,uint256,tuple,uint256)": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
        "URI(string,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SlicerControllerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenResliced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenSliced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export declare type AdminChangedEvent = TypedEvent<[
    string,
    string
], {
    previousAdmin: string;
    newAdmin: string;
}>;
export declare type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], {
    account: string;
    operator: string;
    approved: boolean;
}>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export declare type BeaconUpgradedEvent = TypedEvent<[string], {
    beacon: string;
}>;
export declare type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export declare type InitializedEvent = TypedEvent<[number], {
    version: number;
}>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type RoyaltySetEvent = TypedEvent<[
    BigNumber,
    boolean,
    boolean,
    BigNumber
], {
    tokenId: BigNumber;
    isSlicer: boolean;
    isActive: boolean;
    royaltyPercentage: BigNumber;
}>;
export declare type RoyaltySetEventFilter = TypedEventFilter<RoyaltySetEvent>;
export declare type SlicerControllerSetEvent = TypedEvent<[
    BigNumber,
    string
], {
    tokenId: BigNumber;
    slicerController: string;
}>;
export declare type SlicerControllerSetEventFilter = TypedEventFilter<SlicerControllerSetEvent>;
export declare type TokenReslicedEvent = TypedEvent<[
    BigNumber,
    string[],
    number[]
], {
    tokenId: BigNumber;
    accounts: string[];
    tokensDiffs: number[];
}>;
export declare type TokenReslicedEventFilter = TypedEventFilter<TokenReslicedEvent>;
export declare type TokenSlicedEvent = TypedEvent<[
    string,
    BigNumber,
    SliceParamsStructOutput,
    BigNumber
], {
    slicerAddress: string;
    tokenId: BigNumber;
    params: SliceParamsStructOutput;
    slicerVersion: BigNumber;
}>;
export declare type TokenSlicedEventFilter = TypedEventFilter<TokenSlicedEvent>;
export declare type TransferBatchEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber[],
    BigNumber[]
], {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}>;
export declare type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;
export declare type TransferSingleEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}>;
export declare type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;
export declare type URIEvent = TypedEvent<[
    string,
    BigNumber
], {
    value: string;
    id: BigNumber;
}>;
export declare type URIEventFilter = TypedEventFilter<URIEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export declare type UpgradedEvent = TypedEvent<[string], {
    implementation: string;
}>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface SliceCore extends BaseContract {
    contractName: "SliceCore";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SliceCoreInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        _setBasePath(basePath_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _togglePause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        controller(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        exists(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reslice(tokenId: BigNumberish, accounts: string[], tokensDiffs: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeTransferFromUnreleased(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setController(id: BigNumberish, newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRoyalty(tokenId: BigNumberish, isSlicer: boolean, isActive: boolean, royaltyPercentage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        slice(params: SliceParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        slicerBatchTransfer(from: string, recipients: string[], id: BigNumberish, amounts: BigNumberish[], toRelease: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        slicerManager(overrides?: CallOverrides): Promise<[string]>;
        slicerVersion(overrides?: CallOverrides): Promise<[number]>;
        slicers(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        supply(overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    _setBasePath(basePath_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _togglePause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    controller(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    exists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reslice(tokenId: BigNumberish, accounts: string[], tokensDiffs: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        receiver: string;
        royaltyAmount: BigNumber;
    }>;
    safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeTransferFromUnreleased(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setController(id: BigNumberish, newController: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRoyalty(tokenId: BigNumberish, isSlicer: boolean, isActive: boolean, royaltyPercentage: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    slice(params: SliceParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    slicerBatchTransfer(from: string, recipients: string[], id: BigNumberish, amounts: BigNumberish[], toRelease: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    slicerManager(overrides?: CallOverrides): Promise<string>;
    slicerVersion(overrides?: CallOverrides): Promise<number>;
    slicers(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    supply(overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _setBasePath(basePath_: string, overrides?: CallOverrides): Promise<void>;
        _togglePause(overrides?: CallOverrides): Promise<void>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        controller(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        exists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        initialize(overrides?: CallOverrides): Promise<void>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        reslice(tokenId: BigNumberish, accounts: string[], tokensDiffs: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeTransferFromUnreleased(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setController(id: BigNumberish, newController: string, overrides?: CallOverrides): Promise<void>;
        setRoyalty(tokenId: BigNumberish, isSlicer: boolean, isActive: boolean, royaltyPercentage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        slice(params: SliceParamsStruct, overrides?: CallOverrides): Promise<void>;
        slicerBatchTransfer(from: string, recipients: string[], id: BigNumberish, amounts: BigNumberish[], toRelease: boolean, overrides?: CallOverrides): Promise<void>;
        slicerManager(overrides?: CallOverrides): Promise<string>;
        slicerVersion(overrides?: CallOverrides): Promise<number>;
        slicers(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        supply(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "ApprovalForAll(address,address,bool)"(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RoyaltySet(uint256,bool,bool,uint256)"(tokenId?: BigNumberish | null, isSlicer?: null, isActive?: null, royaltyPercentage?: null): RoyaltySetEventFilter;
        RoyaltySet(tokenId?: BigNumberish | null, isSlicer?: null, isActive?: null, royaltyPercentage?: null): RoyaltySetEventFilter;
        "SlicerControllerSet(uint256,address)"(tokenId?: BigNumberish | null, slicerController?: string | null): SlicerControllerSetEventFilter;
        SlicerControllerSet(tokenId?: BigNumberish | null, slicerController?: string | null): SlicerControllerSetEventFilter;
        "TokenResliced(uint256,address[],int32[])"(tokenId?: BigNumberish | null, accounts?: null, tokensDiffs?: null): TokenReslicedEventFilter;
        TokenResliced(tokenId?: BigNumberish | null, accounts?: null, tokensDiffs?: null): TokenReslicedEventFilter;
        "TokenSliced(address,uint256,tuple,uint256)"(slicerAddress?: string | null, tokenId?: BigNumberish | null, params?: null, slicerVersion?: BigNumberish | null): TokenSlicedEventFilter;
        TokenSliced(slicerAddress?: string | null, tokenId?: BigNumberish | null, params?: null, slicerVersion?: BigNumberish | null): TokenSlicedEventFilter;
        "TransferBatch(address,address,address,uint256[],uint256[])"(operator?: string | null, from?: string | null, to?: string | null, ids?: null, values?: null): TransferBatchEventFilter;
        TransferBatch(operator?: string | null, from?: string | null, to?: string | null, ids?: null, values?: null): TransferBatchEventFilter;
        "TransferSingle(address,address,address,uint256,uint256)"(operator?: string | null, from?: string | null, to?: string | null, id?: null, value?: null): TransferSingleEventFilter;
        TransferSingle(operator?: string | null, from?: string | null, to?: string | null, id?: null, value?: null): TransferSingleEventFilter;
        "URI(string,uint256)"(value?: null, id?: BigNumberish | null): URIEventFilter;
        URI(value?: null, id?: BigNumberish | null): URIEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        _setBasePath(basePath_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _togglePause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        controller(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        exists(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reslice(tokenId: BigNumberish, accounts: string[], tokensDiffs: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeTransferFromUnreleased(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setController(id: BigNumberish, newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRoyalty(tokenId: BigNumberish, isSlicer: boolean, isActive: boolean, royaltyPercentage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        slice(params: SliceParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        slicerBatchTransfer(from: string, recipients: string[], id: BigNumberish, amounts: BigNumberish[], toRelease: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        slicerManager(overrides?: CallOverrides): Promise<BigNumber>;
        slicerVersion(overrides?: CallOverrides): Promise<BigNumber>;
        slicers(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supply(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _setBasePath(basePath_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _togglePause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        controller(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exists(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reslice(tokenId: BigNumberish, accounts: string[], tokensDiffs: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFromUnreleased(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setController(id: BigNumberish, newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRoyalty(tokenId: BigNumberish, isSlicer: boolean, isActive: boolean, royaltyPercentage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        slice(params: SliceParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        slicerBatchTransfer(from: string, recipients: string[], id: BigNumberish, amounts: BigNumberish[], toRelease: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        slicerManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        slicerVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        slicers(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
