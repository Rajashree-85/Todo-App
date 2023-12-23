export default function Items() {
    const countList = [
      { id: 0, value: "Read SpringBoot" },
      { id: 1, value: "Complete assignments" },
      { id: 2, value: "Prepare breakfast" },
      { id: 3, value: "Sleep for 2 hours" },
      {id:4, value:"Take a shower"}
    ];
  
    const listItems = countList.map((num) => (
      <li key={num.id}>
        <p>{num.value}</p>
      </li>
    ));
    return <ul>{listItems}</ul>;
  }
  