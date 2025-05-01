


const value = React.createElement("div", { id: 'p1' },
    [React.createElement("div", { id: 'p2' }, [
        React.createElement("h1", { id: 'h1' }, "h1 tag"),
        React.createElement("h1", { id: 'h2' }, "h2 tag")
    ]
    ), React.createElement("div", { id: 'p2' }, [
        React.createElement("h1", { id: 'h1' }, "h1 tag"),
        React.createElement("h1", { id: 'h2' }, "h2 tag")
    ]
    )]
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(value)

console.log(value)