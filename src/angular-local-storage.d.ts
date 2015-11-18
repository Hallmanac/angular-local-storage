/// <reference path="../typings/angularjs/angular.d.ts" />
declare module AngularLocalStorage {
	
	export interface ICookieBucket {
		isSupported: boolean;
		set: (key: string, value: any, number) => boolean;
		add: (key: string, value: any, number) => boolean; //DEPRECATED
		get: (key: string) => any;
		remove: (key: string) => boolean;
		clearAll: () => void;
	}
	
	
	export interface ILocalBucket{
		isSupported: boolean;
		getStorageType: () => string;
		set: (key: string, value: any, timeout?: Date) => boolean;		
		get: (key: string) => any;
		keys: () => any[];
		remove: () => void;
		clearAll: (regularExpression?: RegExp) => boolean;
		bind: (scope: ng.IScope, key: string, def?: any, lsKey?: string) => () => void;
		deriveKey: (key: string) => string;
		length: () => number;
		cookie: ICookieBucket
	}
}