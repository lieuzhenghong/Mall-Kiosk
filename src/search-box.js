React.initializeTouchEvents(true);

var InfoBox = React.createClass({
    render: function(){
        return (
            <div>
            </div>
        )
    },
    showInfo: function(){
    }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        //For each item in items array
        this.props.items.map(function(item) {
          return <li key={item} onClick = {this.showInfo}>{item}</li>
        })
       }
      </ul>
    )  
  }
});

var FilteredList = React.createClass({
  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){ 
        
        /*CRASH COURSE IN HIGH LEVEL CHEEM FUCK JAVASCRIPT */
        //The .filter method takes a function parameter. It returns only the values that fit the function.
        //The function calls a .search method. The search() method returns the position of the match of two strings, and returns -1 if no match is found.
        //The following line is FUCKING CHEEM 
        
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
     return {
       initialItems: [
         "Apples",
         "Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
    //When the component is mounted, set the items array to be equal to be the initial items array
  },
  render: function(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList} />
      <List items={this.state.items}/>
      </div>
    );
  }
});

React.render(<FilteredList/>, document.getElementById('mount-point'));