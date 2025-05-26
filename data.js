// src/data.js

export const questions = {
  Cprogramming: [
    {
      id: 1,
      question: "Which of the following is a valid C identifier?",
      options: ["int", "_value", "123abc", "main()"],
      answer: "_value",
    },
    {
      id: 2,
      question: "Which header file is required for printf() function?",
      options: ["<stdlib.h>", "<stdio.h>", "<conio.h>", "<string.h>"],
      answer: "<stdio.h>",
    },
    {
      id: 3,
      question: "What is the size of `int` on a 32-bit system?",
      options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
      answer: "4 bytes",
    },
    {
      id: 4,
      question: "Which loop is guaranteed to execute at least once?",
      options: ["for", "while", "do-while", "none"],
      answer: "do-while",
    },
    {
      id: 5,
      question: "What is the correct syntax to declare a pointer?",
      options: ["int p*", "*int p", "int *p", "pointer int p"],
      answer: "int *p",
    },
    {
      id: 6,
      question: "Which function is used to allocate memory dynamically?",
      options: ["calloc", "malloc", "realloc", "All of the above"],
      answer: "All of the above",
    },
    {
      id: 7,
      question: "What does `sizeof(char)` return?",
      options: ["2", "4", "1", "8"],
      answer: "1",
    },
    {
      id: 8,
      question: "What is the output of: `printf(\"%d\", 5 + 'A');`?",
      options: ["70", "A5", "error", "undefined"],
      answer: "70",
    },
    {
      id: 9,
      question: "Which operator is used to access the value at a pointer?",
      options: ["&", "*", "->", "."],
      answer: "*",
    },
    {
      id: 10,
      question: "Which of the following is not a valid data type in C?",
      options: ["int", "float", "real", "char"],
      answer: "real",
    },
  ],

  DataStructures: [
    {
      id: 1,
      question: "Which data structure uses LIFO?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: "Stack",
    },
    {
      id: 2,
      question: "Which data structure uses FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue",
    },
    {
      id: 3,
      question: "What is the worst case time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(log n)",
    },
    {
      id: 4,
      question: "Which traversal gives nodes in sorted order in BST?",
      options: ["Preorder", "Inorder", "Postorder", "Level order"],
      answer: "Inorder",
    },
    {
      id: 5,
      question: "Which data structure is best for recursion?",
      options: ["Queue", "Array", "Stack", "Tree"],
      answer: "Stack",
    },
    {
      id: 6,
      question: "Which is not a linear data structure?",
      options: ["Array", "Queue", "Tree", "Stack"],
      answer: "Tree",
    },
    {
      id: 7,
      question: "What is the maximum number of children in a binary tree node?",
      options: ["1", "2", "3", "unlimited"],
      answer: "2",
    },
    {
      id: 8,
      question: "Which sorting algorithm is best for small data?",
      options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
      answer: "Bubble Sort",
    },
    {
      id: 9,
      question: "Which algorithm is not comparison-based?",
      options: ["Merge Sort", "Quick Sort", "Counting Sort", "Bubble Sort"],
      answer: "Counting Sort",
    },
    {
      id: 10,
      question: "What is the time complexity of inserting into a hash table?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: "O(1)",
    },
  ],

  OS: [
    {
      id: 1,
      question: "Which is not a function of Operating System?",
      options: ["Memory management", "Compiler management", "File management", "Process management"],
      answer: "Compiler management",
    },
    {
      id: 2,
      question: "What is a deadlock?",
      options: ["Process terminates abnormally", "Processes wait indefinitely", "Memory overflow", "Invalid pointer access"],
      answer: "Processes wait indefinitely",
    },
    {
      id: 3,
      question: "Which of the following is a non-preemptive scheduling algorithm?",
      options: ["Round Robin", "SJF", "FCFS", "Priority"],
      answer: "FCFS",
    },
    {
      id: 4,
      question: "What is thrashing?",
      options: ["Frequent page faults", "High CPU usage", "Memory leakage", "Low disk usage"],
      answer: "Frequent page faults",
    },
    {
      id: 5,
      question: "Which system call creates a new process?",
      options: ["exec()", "exit()", "fork()", "wait()"],
      answer: "fork()",
    },
    {
      id: 6,
      question: "What is the full form of IPC?",
      options: ["In-Process Communication", "Inter Process Communication", "Internet Process Control", "Input Program Control"],
      answer: "Inter Process Communication",
    },
    {
      id: 7,
      question: "What is the first process in Linux?",
      options: ["bash", "init", "systemd", "kernel"],
      answer: "init",
    },
    {
      id: 8,
      question: "What is the purpose of a semaphore?",
      options: ["Process creation", "Synchronization", "Memory allocation", "None"],
      answer: "Synchronization",
    },
    {
      id: 9,
      question: "Which memory allocation scheme causes fragmentation?",
      options: ["Paging", "Segmentation", "Contiguous", "Virtual memory"],
      answer: "Contiguous",
    },
    {
      id: 10,
      question: "Which technique is used for memory protection?",
      options: ["Virtual memory", "Paging", "Segmentation", "All of the above"],
      answer: "All of the above",
    },
  ],

  DBMS: [
    {
      id: 1,
      question: "Which language is used for data definition?",
      options: ["DML", "DDL", "DCL", "TCL"],
      answer: "DDL",
    },
    {
      id: 2,
      question: "Which command is used to remove a table?",
      options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
      answer: "DROP",
    },
    {
      id: 3,
      question: "Which normal form removes transitive dependency?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      answer: "3NF",
    },
    {
      id: 4,
      question: "Which key uniquely identifies a record?",
      options: ["Foreign key", "Primary key", "Candidate key", "Super key"],
      answer: "Primary key",
    },
    {
      id: 5,
      question: "What does SQL stand for?",
      options: ["Structured Query Language", "Simple Query List", "Structured Queue Language", "None"],
      answer: "Structured Query Language",
    },
    {
      id: 6,
      question: "Which clause is used for filtering in SQL?",
      options: ["WHERE", "HAVING", "GROUP BY", "SELECT"],
      answer: "WHERE",
    },
    {
      id: 7,
      question: "Which join returns only matched rows from both tables?",
      options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
      answer: "INNER JOIN",
    },
    {
      id: 8,
      question: "Which level of isolation prevents dirty reads?",
      options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
      answer: "Read Committed",
    },
    {
      id: 9,
      question: "Which of these is not a NoSQL database?",
      options: ["MongoDB", "MySQL", "CouchDB", "Firebase"],
      answer: "MySQL",
    },
    {
      id: 10,
      question: "Which of the following is a transaction property?",
      options: ["Atomicity", "Reliability", "Security", "Durability"],
      answer: "Atomicity",
    },
  ],
};
