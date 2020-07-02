import {observable, action, computed} from 'mobx';
// import 'mobx-react-lite/batchingForReactDom';

class ObservableStore {
  @observable log = [];

  @computed get getLog() {
    return this.log;
  }

  @action updateLog = newLog => {
    this.log.push(newLog);
  };

  @action removeSpecifyLogItem = id => {
    this.log = [...this.log.filter(x => x.id !== id)];
  };
}

export default ObservableStore;
