
### Important
- className="d-flex flex-grow-1"   to fill the image in parent div

### Filter and map functions
-  {data.filter(item=>item.name.toLowerCase().includes(search.trim().toLowerCase())).map((item, index) => {
          return <Card item={item} key={index} />;  