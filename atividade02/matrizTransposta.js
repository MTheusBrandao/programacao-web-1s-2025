function transporMatriz(A) {
    console.log("Matriz Original:", A);
    const transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));
    console.log("Matriz Transposta:", transposta);
    return transposta;
}

const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];
transporMatriz(matriz);