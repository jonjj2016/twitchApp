import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streems/StreamCreate.page';
import StreamDelete from './streems/StreamDelete.page';
import StreamList from './streems/StreamList.page';
import StreamEdit from './streems/StreamEdit.page';
import StreamShow from './streems/StreamShow.page';
import Header from './Header.component';
const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>
          <Route path='/streams/new' component={StreamCreate} />
          <Route path='/streams/delete' component={StreamDelete} />
          <Route path='/streams/edit' component={StreamEdit} />
          <Route path='/streams/show' component={StreamShow} />
          <Route exact path='/' component={StreamList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
