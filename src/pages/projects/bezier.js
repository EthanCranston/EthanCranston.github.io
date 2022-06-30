import React from 'react'
import '../Pages.css'
import CodeSnippet from '../../components/CodeSnippet/CodeSnippet'

import bezierVideo from '../../images/bezierVideo.mp4'

const BezierCurves = () => {
  return (
        <>
        <h1>Bézier Curve</h1>
        <p>In this project, I implemented my own curve class to
        extend <a href='https://www.sfml-dev.org/index.php'>SFML</a>. The class uses given points and a tension
        to construct the corresponding curve. The program technically creates
        a <a href='https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline'>Catmull–Rom spline</a> which
        I chose because of its more efficient recursive implementation.</p>
        <video src={bezierVideo} controls="controls"
        className='border-amber-500 rounded-md border-b-2 max-w-80'>Your browser does not support the video player.</video>
        <p>The video above shows a demo of a curve object in a live editor window I built to help debug the program.</p>
        <p>The code below shows the main section of my recursive implementation. The nodes are saved in a circular
            linked list that allows new points to be inserted easily.
        </p>
        <CodeSnippet language="c"code={bezierCode}/>
        </>
  )
}

const bezierCode = 'void smooth_curve(Node* node1, sf::Vector2f eq[4], float flatnessFactor){\n    Node* node2 = node1->next;\n    Node* node3 = node2->next;\n    \n    if(is_flat(node1->point,node2->point,node3->point, flatnessFactor)) return;\n    else{\n        //creates new  points\n        Node* add1 = new Node;\n        Node* add2 = new Node;\n        //assigns t value to points\n        add1->t = (node1->t + node2->t) / 2;\n        add2->t = (node2->t + node3->t) / 2;\n        //calculates point value\n        add1->point = eq[0] * add1->t * add1->t * add1->t + eq[1] * add1->t * add1->t + eq[2] * add1->t + eq[3];\n        add2->point = eq[0] * add2->t * add2->t * add2->t + eq[1] * add2->t * add2->t + eq[2] * add2->t + eq[3];\n        //appends new points to linked list\n        add1->next = node2;\n        node1->next = add1;\n        add2->next = node3;\n        node2->next = add2;\n        //rinse and repeat\n        smooth_curve(node1, eq, flatnessFactor);\n        smooth_curve(node2, eq, flatnessFactor);\n    }'

export default BezierCurves
