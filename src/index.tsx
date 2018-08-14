import { h, app, View } from "hyperapp"

export interface State {
    count: number
}

export interface Actions {
    down: (value: number) => State
    up: (value: number) => State
}

const state: State = {
  count: 0
}

const actions: Actions = {
  down: value => ({ count: state.count - value }),
  up: value => ({ count: state.count + value })
}

const view: View<State, Actions> = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
)

app(state, actions, view, document.body)
