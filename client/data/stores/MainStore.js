import AppDispatcher from '../AppDispatcher.js';
import { EventEmitter } from 'events';
import assign from 'object-assign';

var currentPage = 'home';
var previousPage = '';

function setCurrentPage(curPage) {
  previousPage = currentPage;
  currentPage = curPage;
}

function onChange() {
  MainStore.emit('change');
}

var MainStore = assign({}, EventEmitter.prototype, {

  addChangeListener : function(callback) {
    this.on('change', callback);
  },

  removeChangeListener : function(callback) {
    this.removeListener('change', callback);
  },

  getCurrentPage : function() {
    return currentPage;
  },

  getPreviousPage : function() {
    return previousPage;
  }
});

function handleAction(action) {
  if (action.type === 'page_changed') {
    setCurrentPage(action.currentPage);
    onChange();
  }
}

MainStore.dispatchToken = AppDispatcher.register(handleAction);

export default MainStore;
