/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		user?: { username: string }
	}
	// interface Platform {}
	interface Session {
		user?: { username: string}
	}
	// interface Stuff {}
}

declare namespace svelte.JSX {
  interface DOMAttributes<T> {
    onclick_outside?: CompositionEventHandler<T>;
  }
}