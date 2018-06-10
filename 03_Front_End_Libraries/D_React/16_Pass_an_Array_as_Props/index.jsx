const List = (props) => {
    { /* change code below this line */ }
    return <p>{ props.tasks.join(', ')}</p>
    { /* change code above this line */ }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                { /* change code below this line */}
                {/* third */}
                <List tasks={[ 'today01', 'today02', 'today03' ]}/>
                <h2>Tomorrow</h2>
                {/* fifth */}
                <List tasks={[ 'tomorrow01', 'tomorrow02', 'tomorrow03', 'tomorrow04']}/>
                { /* change code above this line */}
            </div>
        );
    }
};