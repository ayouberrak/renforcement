// challange for advanced 

function breadthFirstSearch(graph,sommet){
    let queue =[ ];
    let resutl =[];
    let visit =[];

    visit.push(sommet);
    queue.push(sommet);

    while(queue.length>0){
        let premier = queue.shift();
        resutl.push(premier);

        for(let voisinP of graph[premier]){
            if(!visit.includes(voisinP)){
                visit.push(voisinP);
                queue.push(voisinP);
            }
        }
    }
    console.log(resutl)
}
const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 4],
    3: [1, 5],
    4: [1, 2, 5],
    5: [3, 4]
};


breadthFirstSearch(graph,0);



