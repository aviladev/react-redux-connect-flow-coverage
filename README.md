# Flow coverage sample with React Redux connect

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project is a sample that reproduces flow's warning about not covered code when `connect`ing a component using [react-redux](https://github.com/reduxjs/react-redux).

## To reproduce

### Setting up

```sh
git clone https://github.com/avilapedro/react-redux-connect-flow-coverage.git
cd react-redux-connect-flow-coverage
npm install
npm run flow-typed install
```

### Checking
1. `npm run flow`

    Output:
    
    ```text
      No errors!
    ```
1. `npm run flow coverage src/App.js`

    Output:

    ```text
      Covered: 91.30% (21 of 23 expressions)
    ```
1. `npm run flow coverage -- --pretty src/App.js`
    
    Output (look for `expressions.uncovered_locs` key at the end):

    ```json
    {
      "expressions":{
        "covered_count":21,
        "covered_locs":[
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":7,"column":1,"offset":129},
            "end":{"line":7,"column":29,"offset":158}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":9,"column":1,"offset":160},
            "end":{"line":20,"column":1,"offset":396}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":9,"column":19,"offset":178},
            "end":{"line":9,"column":27,"offset":187}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":12,"column":7,"offset":229},
            "end":{"line":17,"column":12,"offset":384}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":15,"column":12,"offset":309},
            "end":{"line":15,"column":15,"offset":313}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":15,"column":12,"offset":309},
            "end":{"line":15,"column":21,"offset":319}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":15,"column":12,"offset":309},
            "end":{"line":15,"column":27,"offset":325}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":15,"column":12,"offset":309},
            "end":{"line":15,"column":58,"offset":356}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":15,"column":33,"offset":330},
            "end":{"line":15,"column":33,"offset":331}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":15,"column":33,"offset":330},
            "end":{"line":15,"column":57,"offset":355}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":15,"column":38,"offset":335},
            "end":{"line":15,"column":57,"offset":355}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":15,"column":47,"offset":344},
            "end":{"line":15,"column":47,"offset":345}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":15,"column":51,"offset":348},
            "end":{"line":15,"column":51,"offset":349}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":22,"column":7,"offset":404},
            "end":{"line":22,"column":21,"offset":419}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":22,"column":25,"offset":422},
            "end":{"line":22,"column":60,"offset":458}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":22,"column":26,"offset":423},
            "end":{"line":22,"column":37,"offset":435}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":22,"column":44,"offset":441},
            "end":{"line":22,"column":59,"offset":457}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":22,"column":53,"offset":450},
            "end":{"line":22,"column":57,"offset":455}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":23,"column":16,"offset":474},
            "end":{"line":23,"column":39,"offset":498}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":23,"column":24,"offset":482},
            "end":{"line":23,"column":38,"offset":497}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":23,"column":41,"offset":499},
            "end":{"line":23,"column":43,"offset":502}
          }
        ],
        "uncovered_count":2,
        "uncovered_locs":[
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":23,"column":16,"offset":474},
            "end":{"line":23,"column":22,"offset":481}
          },
          {
            "source":"<PROJECT_ROOT>/src/App.js",
            "type":"SourceFile",
            "start":{"line":23,"column":16,"offset":474},
            "end":{"line":23,"column":44,"offset":503}
          }
        ]
      }
    }
    ```
