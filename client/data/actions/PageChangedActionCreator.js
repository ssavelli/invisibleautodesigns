import AppDispatcher from '../AppDispatcher.js';

export default function(currentPage) {
  var action = {
    type: 'page_changed',
    currentPage: currentPage
  };

  AppDispatcher.dispatch(action);
};
