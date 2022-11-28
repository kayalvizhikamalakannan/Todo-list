import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
  model() {
    return [
      {
        id: 1,
        todo: 'todo 1',
      },
    ];
  }
}
