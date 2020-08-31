import React, {useState,useEffect}  from "react"; 
import{View, Text, TouchableOpacity, TextInput,FlatList,Image,
    StyleSheet, Picker,TouchableWithoutFeedback,ScrollView} from "react-native";

import temp1 from "./src/temp"
    function RadioButton(props) {
      return (
          <View style={{ height: 12,width: 12,borderRadius: 12,
            borderWidth: 1,borderColor: '#FF4404', alignItems: 'center',justifyContent: 'center',padding:2,
          }}></View>
      );
    }
    function RadioButton1(props) {
        return (
        <View style={{ height: 12,width: 12,borderRadius: 12,
              borderWidth: 1,borderColor: '#FF4404', alignItems: 'center',justifyContent: 'center',padding:2,
            }}>  
        <View style={{ height: 7,
                    width: 7,  borderRadius: 6,
                    backgroundColor: '#FF4404'}}/>
        </View>
        );}
    
const App=()=> {
    console.log(temp1);
  const [temp,setTemp]= useState(0);
  const [questions,setQuestions]= useState([
    [{
    q:"1. Which of these is not a interface in the Collections Framework?",
    opt1:"Collection",
    opt2:"Group",
    opt3:"Set",
    opt4:"List",
    ans:"B"
    }],
      [{
    q:"2. Which interface restricts duplicate elements?",
    opt1:"Set",
    opt2:"List",
    opt3:"Map",
    opt4:"(All of these)",
    ans:"A"
    }],
    [{
    q:"3. Which of these collection class has the ability to grow dynamically?",
    opt1:"Array",
    opt2:"Arrays",
    opt3:"ArrayList",
    opt4:"(None of these)",
    ans:"C"
    }],
    [{
    q:"4. The accuracy and efficiency of a HashMap can be guaranteed with:",
    opt1:"override equals method",
    opt2:"override hashCode method",
    opt3:"(None of these)",
    opt4:"(All of these)",
    ans:"D"
    }],
    [{
    q:"5. A HashMap allows the existence of:",
    opt1:"null values",
    opt2:"one null key",
    opt3:"(None of these)",
    opt4:"(All of these)",
    ans:"D"
    }],
    [{
    q:"6. What implementation of Iterator can traverse a collection in both directions?",
    opt1:"Iterator",
    opt2:"ListIterator",
    opt3:"SetIterator",
    opt4:"MapIterator",
    ans:"B"
    }],
    [{
    q:"7. The Comparable interface contains which called?",
    opt1:"toCompare",
    opt2:"compare",
    opt3:"compareTo",
    opt4:"compareWith",
    ans:"C"
    }],
    [{
    q:"8. Which is faster and uses less memory?",
    opt1:"ListEnumeration",
    opt2:"Iterator",
    opt3:"Enumeration",
    opt4:"ListIterator",
    ans:"C"
    }],
    [{
    q:"9. What Iterator can throw a ConcurrentModificationException?",
    opt1:"Fail-fast Iterators",
    opt2:"Fail-safe Iterators",
    opt3:"All of these",
    opt4:"None of these",
    ans:"A"
    }],
    [{
    q:"10. What is the default number of Partitions/segments in Concurrent Hash Map?",
    opt1:"12",
    opt2:"32",
    opt3:"4",
    opt4:"16",
    ans:"D"
    }],
    [{
    q:"11. Which is best suited to a multi-threaded environment?",
    opt1:"WeakHashMap",
    opt2:"Hashtable",
    opt3:"HashMap",
    opt4:"ConcurrentHashMap",
    ans:"D"
    }],
    [{
    q:"12. The default capacity of a Vector is:",
    opt1:"10",
    opt2:"12",
    opt3:"8",
    opt4:"16",
    ans:"A"
    }],
    [{
    q:"13. Which does NOT implement the Collection interface?",
    opt1:"List",
    opt2:"Map",
    opt3:"Set",
    opt4:"None of these",
    ans:"B"
    }],
    [{
    q:"14. The default capacity of a ArrayList is:",
    opt1:"12",
    opt2:"16",
    opt3:"1",
    opt4:"10",
    ans:"D"
    }],
    [{
    q:"15. Which provides better performance for the insertion and removal from the middle of the list?",
    opt1:"Vector",
    opt2:"ArrayList",
    opt3:"LinkedList",
    opt4:"All of these.",
    ans:"C"
    }],
    [{
    q:"16. An unordered array has a search time complexity of:",
    opt1:"O(log n)",
    opt2:"O(n)",
    opt3:"O(n + 1)",
    opt4:"O(1)",
    ans:"B"
    }],
    [{
    q:"17. The add and remove methods of TreeSet have a time complexity of:",
    opt1:"O(n)",
    opt2:"O(n + 1)",
    opt3:"O(1)",
    opt4:"O(log n)",
    ans:"D"
    }],
    [{
    q:"18. After resizing, size of ArrayList is increased by :",
    opt1:"200%",
    opt2:"50%",
    opt3:"100%",
    opt4:"None of these",
    ans:"B"
    }],
    [{
    q:"19. After resizing, size of Vector is increased by:",
    opt1:"200%",
    opt2:"100%",
    opt3:"50%",
    opt4:"None of these",
    ans:"B"
    }],
    [{
    q:"20. Deque and Queue are derived from:",
    opt1:"AbstractList",
    opt2:"Collection",
    opt3:"AbstractCollection",
    opt4:"List",
    ans:"B"
    }],
    [{
    q:"21. What guarantees type-safety in a collection?",
    opt1:"Generics",
    opt2:"Abstract classes",
    opt3:"Interfaces",
    opt4:"Collection",
    ans:"A"
    }],
    [{
    q:"22. HashSet internally uses?",
    opt1:"Set",
    opt2:"HashMap",
    opt3:"List",
    opt4:"Collection",
    ans:"B"
    }],
    [{
    q:"23. The most used interfaces from the Collection framework are?",
    opt1:"List",
    opt2:"Map",
    opt3:"Set",
    opt4:"All of these",
    ans:"D"
    }],
    [{
    q:"24. The root interface of Java Collection framework hierarchy is -",
    opt1:"Collection",
    opt2:"Root",
    opt3:"Collections",
    opt4:"List/Set",
    ans:"A"
    }],
    [{
    q:"25. Which of these is synchronized?",
    opt1:"ArrayList",
    opt2:"LinkedList",
    opt3:"Vector",
    opt4:"None of these",
    ans:"C"
    }],
    [{
    q:"26. ArrayList implements which of the following?",
    opt1:"List",
    opt2:"RandomAccess",
    opt3:"Cloneable",
    opt4:"All of these",
    ans:"D"
    }],
    [{
    q:"27. Which of these allows the storage of many null values?",
    opt1:"Set",
    opt2:"List",
    opt3:"None of these",
    opt4:"All of these",
    ans:"B"
    }],
    [{
    q:"28. nextIndex() and previousIndex() are methods of which interface?",
    opt1:"IndexIterator",
    opt2:"Iterator",
    opt3:"ListIterator",
    opt4:"NextPreviousIterator",
    ans:"C"
    }],
    [{
    q:"29. Vector extends which of these?",
    opt1:"ArrayList",
    opt2:"LinkedList",
    opt3:"AbstractList",
    opt4:"None",
    ans:"C"
    }],
    [{
    q:"30. LinkedList implements?",
    opt1:"Deque",
    opt2:"List",
    opt3:"None",
    opt4:"All",
    ans:"D"
    }],
    [{
    q:"31. In Iterator, nextElement() method of Enumeration has been changed to:",
    opt1:"next()",
    opt2:"getNext()",
    opt3:"returnNext()",
    opt4:"name remains same",
    ans:"A"
    }],
    [{
    q:"32. Enumeration returned by Vector is?",
    opt1:"fail-fast",
    opt2:"fail-safe",
    opt3:"none",
    opt4:"ALL",
    ans:"B"
    }],
    [{
    q:"33. From Java 5 onwards, which one of these is recommended to replace Hashtable?",
    opt1:"ConcurrentHashMap",
    opt2:"HashMap",
    opt3:"ConcurrentHashtable",
    opt4:"None",
    ans:"A"
    }],
    [{
    q:"34. Which does not allow to store a null value?",
    opt1:"TreeSet",
    opt2:"LinkedHashSet",
    opt3:"HashSet",
    opt4:"None",
    ans:"A"
    }],
    [{
    q:"35. Iterator returned by Vector is?",
    opt1:"fail-fast",
    opt2:"fail-safe",
    opt3:"none",
    opt4:"all",
    ans:"A"
    }],
    [{
    q:"36. What describes how well an algorithm performs in best, average or worse case scenarios?",
    opt1:"Big-B",
    opt2:"Big-O",
    opt3:"Big-Data",
    opt4:"Big-N",
    ans:"B"
    }],
    [{
    q:"37. An ordered array has a search time complexity of?",
    opt1:"O(n)",
    opt2:"O(1)",
    opt3:"O(log n)",
    opt4:"O(n-1)",
    ans:"C"
    }],
    [{
    q:"38. Which Map class must be preferred in multi-threading environment to maintain natural order of keys?",
    opt1:"ConcurrentHashMap",
    opt2:"ConcurrentSkipListMap",
    opt3:"ConcurrentMap",
    opt4:"All",
    ans:"B"
    }],
    [{
    q:"39. TreeMap implements?",
    opt1:"Dictionary",
    opt2:"HashMap",
    opt3:"AbstractMap",
    opt4:"NavigableMap",
    ans:"D"
    }],
    [{
    q:"40. Which list class must be preferred in multi-threading environment, considering performance constraint",
    opt1:"Vector",
    opt2:"CopyOnWriteArrayList",
    opt3:"ArrayList",
    opt4:"ConcurrentArrayList",
    ans:"B"
    }],
    [{
    q:"41. Which Set class must be preferred in multi-threading environment, considering performance constraint",
    opt1:"HashSet",
    opt2:"ConcurrentSkipListSet",
    opt3:"LinkedHashSet",
    opt4:"CopyOnWriteArraySet",
    ans:"B"
    }],
    [{
    q:"42. Which Map class must be preferred in multi-threading environment, considering performance constraint",
    opt1:"Hashtable",
    opt2:"CopyOnWriteMap",
    opt3:"ConcurrentHashMap",
    opt4:"ConcurrentMap",
    ans:"C"
    }],
    [{
    q:"43. Which allows the removal of elements from a collection?",
    opt1:"Enumeration",
    opt2:"Iterator",
    opt3:"Both",
    opt4:"None",
    ans:"B"
    }],
    [{
    q:"44. The Comparator interface contains the method?",
    opt1:"compareWith()",
    opt2:"compareTo()",
    opt3:"compare()",
    opt4:"none",
    ans:"C"
    }],
    [{
    q:"45. Which of these is synchronized?",
    opt1:"TreeMap",
    opt2:"HashMap",
    opt3:"Hashtable",
    opt4:"All",
    ans:"C"
    }],
    [{
    q:"46. Which is more offers best performance?",
    opt1:"TreeMap",
    opt2:"HashMap",
    opt3:"LinkedHashMap",
    opt4:"All are equal",
    ans:"B"
    }],
    [{
    q:"47. Which of these class should be preferred to be used as a key in a HashMap?",
    opt1:"String",
    opt2:"Integer",
    opt3:"Double",
    opt4:"Any of these",
    ans:"D"
    }],
    [{
    q:"48. What should we use when add and remove operations are more frequent than get operations?",
    opt1:"LinkedList",
    opt2:"ArrayList",
    opt3:"Vector",
    opt4:"All",
    ans:"A"
    }],
    [{
    q:"49. Iterator returned by ArrayList is?",
    opt1:"Fail-fast",
    opt2:"Fail-safe",
    opt3:"none",
    opt4:"all",
    ans:"A"
    }],
    [{
    q:"50. Iterator returned by LinkedList is?",
    opt1:"Fail-fast",
    opt2:"Fail-safe",
    opt3:"none",
    opt4:"all",
    ans:"A"
    }],
      ]);
  const [opt,setOpt]= useState(0);
  const [sel,setSel]= useState("");
  let otp1=0;
  const [rf,setRf]= useState([0,0,0,0]);
  const item= [
    
    [[
      [{
      q:"1. Which of these is not a interface in the Collections Framework?",
      opt1:"Collection",
      opt2:"Group",
      opt3:"Set",
      opt4:"List",
      ans:"B"
      }],
        [{
      q:"2. Which interface restricts duplicate elements?",
      opt1:"Set",
      opt2:"List",
      opt3:"Map",
      opt4:"(All of these)",
      ans:"A"
      }],
      [{
      q:"3. Which of these collection class has the ability to grow dynamically?",
      opt1:"Array",
      opt2:"Arrays",
      opt3:"ArrayList",
      opt4:"(None of these)",
      ans:"C"
      }],
      [{
      q:"4. The accuracy and efficiency of a HashMap can be guaranteed with:",
      opt1:"override equals method",
      opt2:"override hashCode method",
      opt3:"(None of these)",
      opt4:"(All of these)",
      ans:"D"
      }],
      [{
      q:"5. A HashMap allows the existence of:",
      opt1:"null values",
      opt2:"one null key",
      opt3:"(None of these)",
      opt4:"(All of these)",
      ans:"D"
      }],
      [{
      q:"6. What implementation of Iterator can traverse a collection in both directions?",
      opt1:"Iterator",
      opt2:"ListIterator",
      opt3:"SetIterator",
      opt4:"MapIterator",
      ans:"B"
      }],
      [{
      q:"7. The Comparable interface contains which called?",
      opt1:"toCompare",
      opt2:"compare",
      opt3:"compareTo",
      opt4:"compareWith",
      ans:"C"
      }],
      [{
      q:"8. Which is faster and uses less memory?",
      opt1:"ListEnumeration",
      opt2:"Iterator",
      opt3:"Enumeration",
      opt4:"ListIterator",
      ans:"C"
      }],
      [{
      q:"9. What Iterator can throw a ConcurrentModificationException?",
      opt1:"Fail-fast Iterators",
      opt2:"Fail-safe Iterators",
      opt3:"All of these",
      opt4:"None of these",
      ans:"A"
      }],
      [{
      q:"10. What is the default number of Partitions/segments in Concurrent Hash Map?",
      opt1:"12",
      opt2:"32",
      opt3:"4",
      opt4:"16",
      ans:"D"
      }],
      [{
      q:"11. Which is best suited to a multi-threaded environment?",
      opt1:"WeakHashMap",
      opt2:"Hashtable",
      opt3:"HashMap",
      opt4:"ConcurrentHashMap",
      ans:"D"
      }],
      [{
      q:"12. The default capacity of a Vector is:",
      opt1:"10",
      opt2:"12",
      opt3:"8",
      opt4:"16",
      ans:"A"
      }],
      [{
      q:"13. Which does NOT implement the Collection interface?",
      opt1:"List",
      opt2:"Map",
      opt3:"Set",
      opt4:"None of these",
      ans:"B"
      }],
      [{
      q:"14. The default capacity of a ArrayList is:",
      opt1:"12",
      opt2:"16",
      opt3:"1",
      opt4:"10",
      ans:"D"
      }],
      [{
      q:"15. Which provides better performance for the insertion and removal from the middle of the list?",
      opt1:"Vector",
      opt2:"ArrayList",
      opt3:"LinkedList",
      opt4:"All of these.",
      ans:"C"
      }],
      [{
      q:"16. An unordered array has a search time complexity of:",
      opt1:"O(log n)",
      opt2:"O(n)",
      opt3:"O(n + 1)",
      opt4:"O(1)",
      ans:"B"
      }],
      [{
      q:"17. The add and remove methods of TreeSet have a time complexity of:",
      opt1:"O(n)",
      opt2:"O(n + 1)",
      opt3:"O(1)",
      opt4:"O(log n)",
      ans:"D"
      }],
      [{
      q:"18. After resizing, size of ArrayList is increased by :",
      opt1:"200%",
      opt2:"50%",
      opt3:"100%",
      opt4:"None of these",
      ans:"B"
      }],
      [{
      q:"19. After resizing, size of Vector is increased by:",
      opt1:"200%",
      opt2:"100%",
      opt3:"50%",
      opt4:"None of these",
      ans:"B"
      }],
      [{
      q:"20. Deque and Queue are derived from:",
      opt1:"AbstractList",
      opt2:"Collection",
      opt3:"AbstractCollection",
      opt4:"List",
      ans:"B"
      }],
      [{
      q:"21. What guarantees type-safety in a collection?",
      opt1:"Generics",
      opt2:"Abstract classes",
      opt3:"Interfaces",
      opt4:"Collection",
      ans:"A"
      }],
      [{
      q:"22. HashSet internally uses?",
      opt1:"Set",
      opt2:"HashMap",
      opt3:"List",
      opt4:"Collection",
      ans:"B"
      }],
      [{
      q:"23. The most used interfaces from the Collection framework are?",
      opt1:"List",
      opt2:"Map",
      opt3:"Set",
      opt4:"All of these",
      ans:"D"
      }],
      [{
      q:"24. The root interface of Java Collection framework hierarchy is -",
      opt1:"Collection",
      opt2:"Root",
      opt3:"Collections",
      opt4:"List/Set",
      ans:"A"
      }],
      [{
      q:"25. Which of these is synchronized?",
      opt1:"ArrayList",
      opt2:"LinkedList",
      opt3:"Vector",
      opt4:"None of these",
      ans:"C"
      }],
      [{
      q:"26. ArrayList implements which of the following?",
      opt1:"List",
      opt2:"RandomAccess",
      opt3:"Cloneable",
      opt4:"All of these",
      ans:"D"
      }],
      [{
      q:"27. Which of these allows the storage of many null values?",
      opt1:"Set",
      opt2:"List",
      opt3:"None of these",
      opt4:"All of these",
      ans:"B"
      }],
      [{
      q:"28. nextIndex() and previousIndex() are methods of which interface?",
      opt1:"IndexIterator",
      opt2:"Iterator",
      opt3:"ListIterator",
      opt4:"NextPreviousIterator",
      ans:"C"
      }],
      [{
      q:"29. Vector extends which of these?",
      opt1:"ArrayList",
      opt2:"LinkedList",
      opt3:"AbstractList",
      opt4:"None",
      ans:"C"
      }],
      [{
      q:"30. LinkedList implements?",
      opt1:"Deque",
      opt2:"List",
      opt3:"None",
      opt4:"All",
      ans:"D"
      }],
      [{
      q:"31. In Iterator, nextElement() method of Enumeration has been changed to:",
      opt1:"next()",
      opt2:"getNext()",
      opt3:"returnNext()",
      opt4:"name remains same",
      ans:"A"
      }],
      [{
      q:"32. Enumeration returned by Vector is?",
      opt1:"fail-fast",
      opt2:"fail-safe",
      opt3:"none",
      opt4:"ALL",
      ans:"B"
      }],
      [{
      q:"33. From Java 5 onwards, which one of these is recommended to replace Hashtable?",
      opt1:"ConcurrentHashMap",
      opt2:"HashMap",
      opt3:"ConcurrentHashtable",
      opt4:"None",
      ans:"A"
      }],
      [{
      q:"34. Which does not allow to store a null value?",
      opt1:"TreeSet",
      opt2:"LinkedHashSet",
      opt3:"HashSet",
      opt4:"None",
      ans:"A"
      }],
      [{
      q:"35. Iterator returned by Vector is?",
      opt1:"fail-fast",
      opt2:"fail-safe",
      opt3:"none",
      opt4:"all",
      ans:"A"
      }],
      [{
      q:"36. What describes how well an algorithm performs in best, average or worse case scenarios?",
      opt1:"Big-B",
      opt2:"Big-O",
      opt3:"Big-Data",
      opt4:"Big-N",
      ans:"B"
      }],
      [{
      q:"37. An ordered array has a search time complexity of?",
      opt1:"O(n)",
      opt2:"O(1)",
      opt3:"O(log n)",
      opt4:"O(n-1)",
      ans:"C"
      }],
      [{
      q:"38. Which Map class must be preferred in multi-threading environment to maintain natural order of keys?",
      opt1:"ConcurrentHashMap",
      opt2:"ConcurrentSkipListMap",
      opt3:"ConcurrentMap",
      opt4:"All",
      ans:"B"
      }],
      [{
      q:"39. TreeMap implements?",
      opt1:"Dictionary",
      opt2:"HashMap",
      opt3:"AbstractMap",
      opt4:"NavigableMap",
      ans:"D"
      }],
      [{
      q:"40. Which list class must be preferred in multi-threading environment, considering performance constraint",
      opt1:"Vector",
      opt2:"CopyOnWriteArrayList",
      opt3:"ArrayList",
      opt4:"ConcurrentArrayList",
      ans:"B"
      }],
      [{
      q:"41. Which Set class must be preferred in multi-threading environment, considering performance constraint",
      opt1:"HashSet",
      opt2:"ConcurrentSkipListSet",
      opt3:"LinkedHashSet",
      opt4:"CopyOnWriteArraySet",
      ans:"B"
      }],
      [{
      q:"42. Which Map class must be preferred in multi-threading environment, considering performance constraint",
      opt1:"Hashtable",
      opt2:"CopyOnWriteMap",
      opt3:"ConcurrentHashMap",
      opt4:"ConcurrentMap",
      ans:"C"
      }],
      [{
      q:"43. Which allows the removal of elements from a collection?",
      opt1:"Enumeration",
      opt2:"Iterator",
      opt3:"Both",
      opt4:"None",
      ans:"B"
      }],
      [{
      q:"44. The Comparator interface contains the method?",
      opt1:"compareWith()",
      opt2:"compareTo()",
      opt3:"compare()",
      opt4:"none",
      ans:"C"
      }],
      [{
      q:"45. Which of these is synchronized?",
      opt1:"TreeMap",
      opt2:"HashMap",
      opt3:"Hashtable",
      opt4:"All",
      ans:"C"
      }],
      [{
      q:"46. Which is more offers best performance?",
      opt1:"TreeMap",
      opt2:"HashMap",
      opt3:"LinkedHashMap",
      opt4:"All are equal",
      ans:"B"
      }],
      [{
      q:"47. Which of these class should be preferred to be used as a key in a HashMap?",
      opt1:"String",
      opt2:"Integer",
      opt3:"Double",
      opt4:"Any of these",
      ans:"D"
      }],
      [{
      q:"48. What should we use when add and remove operations are more frequent than get operations?",
      opt1:"LinkedList",
      opt2:"ArrayList",
      opt3:"Vector",
      opt4:"All",
      ans:"A"
      }],
      [{
      q:"49. Iterator returned by ArrayList is?",
      opt1:"Fail-fast",
      opt2:"Fail-safe",
      opt3:"none",
      opt4:"all",
      ans:"A"
      }],
      [{
      q:"50. Iterator returned by LinkedList is?",
      opt1:"Fail-fast",
      opt2:"Fail-safe",
      opt3:"none",
      opt4:"all",
      ans:"A"
      }],
        ],
      [{rollNum:"IT2K17 - 07"}]],
     [[
[{
q:"1 Which of these classes is not part of Java’s collection framework?",
opt1:"Maps",
opt2:"Array",
opt3:"Stack",
opt4:"Queue",
ans:"1"
}],
  [{
q:"2 To obtain the last element, from a LinkedList which method should be used ?",
opt1:"getLast( )",
opt2:"peekLast( )",
opt3:"Both 1 and 2",
opt4:"None of the above",
ans:"3"
}],
[{
q:"3 Which of these packages contain all the collection classes?",
opt1:"java.lang",
opt2:"java.util",
opt3:"java.net",
opt4:"java.awt",
ans:"2"
}],
[{
q:"4 What is Collection in Java?",
opt1:"A group of objects",
opt2:"A group of classes",
opt3:"A group of interfaces",
opt4:"None of the mentioned",
ans:"1"
}],
[{
q:"5 Which of these methods deletes all the elements from invoking collection?",
opt1:"clear()",
opt2:"reset()",
opt3:"delete()",
opt4:"refresh()",
ans:"1"
}],
[{
q:"6 Which of these interface declares core method that all collections will have?",
opt1:"set",
opt2:"EventListner",
opt3:"Comparator",
opt4:"Collection",
ans:"4"
}],
[{
q:"7 Which of these interface handle sequences?",
opt1:"List",
opt2:"Set",
opt3:"SortedMap",
opt4:"SortedList",
ans:"1"
}],
[{
q:"8 Which of these interface must contain a unique element?",
opt1:"Set",
opt2:"List",
opt3:"SortedMap",
opt4:"Collection",
ans:"1"
}],
[{
q:"9 Which of these is static variable defined in Collections?",
opt1:"EMPTY_SET",
opt2:"EMPTY_MAP",
opt3:"EMPTY_LIST",
opt4:"All of the above",
ans:"4"
}],
[{
q:"10 Which of these methods sets every element of a List to a specified object?",
opt1:"set()",
opt2:"fill()",
opt3:"Complete()",
opt4:"add()",
ans:"2"
}],
[{
q:"11 Which collection class allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronized?",
opt1:"java.util.HashSet",
opt2:"java.util.LinkedHashSet",
opt3:"java.util.List",
opt4:"java.util.ArrayList",
ans:"4"
}],
[{
q:"12 Which collection class allows you to associate its elements with key values, and allows you to retrieve objects in FIFO sequence?",
opt1:"ArrayList",
opt2:"Set",
opt3:"LinkedHashMap",
opt4:"TreeMap",
ans:"3"
}],
[{
q:"13 What is the output of this program? import java.util.*;class Array {public static void main(String args[]) {int array[] = new int [5];for (int i = 5; i > 0; i--)	array[5-i] = i;	Arrays.fill(array, 1, 4, 8);for (int i = 0; i < 5 ; i++)System.out.print(array[i]); }}",
opt1:"12885",
opt2:"12845",
opt3:"58881",
opt4:"54881",
ans:"3"
}],
[{
q:"14 What is the output of this program?    import java.util.*;   class stack {        public static void main(String args[]) {            Stack obj = new Stack();            obj.push(new Integer(6));            obj.push(new Integer(4));            obj.pop();            obj.push(new Integer(9));          System.out.println(obj);}    }",
opt1:"[6,4,9]",
opt2:"[4,9]",
opt3:"[6,4]",
opt4:"[6,9]",
ans:"4"
}],
[{
q:"15 Which of the following is true about TreeSet?",
opt1:"TreeSet is a generic class",
opt2:"TreeSet extends AbstractSet",
opt3:"Objects are stored in sorted, ascending order",
opt4:"All 3",
ans:"4"
}],
[{
q:"16 Which of the following will you use to insert elements at any position in the collection ?",
opt1:"Set",
opt2:"ArrayList",
opt3:"SortedMap",
opt4:"LinkedList",
ans:"4"
}],
[{
q:"17 Set allows at most one null element ?",
opt1:"True",
opt2:"Anything is possible",
opt3:"False",
opt4:"Both 2 and 3",
ans:"1"
}],
[{
q:"18 If you want to use a List implementation,but you are not sure of its requirement. Which one should you prefer ?",
opt1:"Set",
opt2:"Vector",
opt3:"ArrayList",
opt4:"Tree",
ans:"3"
}],
[{
q:"19 What is the data structure that a Set uses to store its elements  ?",
opt1:"Set",
opt2:"SortedSet",
opt3:"Map",
opt4:"Hashtable",
ans:"3"
}],
[{
q:"20 Which implementation of Set should be used to get the objects in the order it were inserted, by the iterator of the set ?",
opt1:"HashSet",
opt2:"SortedSet",
opt3:"TreeSet",
opt4:"LinkedHashSet",
ans:"4"
}],
// [{
// q:"21 What is the outputof the following program ?import java.util.*; public class linkedList {    public static void main(String[] args)    {         List<String> list1 = new LinkedList<>();         list1.add("Hello");         list1.add("World");         list1.add("How");         list1.add("are");   list1.add("you ?");        List<String> list2 = new LinkedList<>();       list2.add("Hello");         list1.removeAll(list2);        for (String i : list1)            System.out.printf(i + " ");  System.out.println(); } } ",
// opt1:"Hello",
// opt2:"World How are you ?",
// opt3:"How are you ?",
// opt4:"None of the above",
// ans:"2"
// }],
// [{
// q:"22 What is the output of the following program?
// import java.util.*;  
// public class stack 
// {     public static void main(String[] args) 
//     {  List<String> list = new LinkedList<>(); 
//         list.add("Happy"); 
//         list.add("Birthday"); 
//         list.add("Roy"); 
//         list.add("Best Wishes ! "); 
//         Iterator<Integer> iter = list.iterator(); 
  
//         while (iter.hasNext()) 
//             System.out.printf(iter.next() + " "); 
  
//         System.out.println(); 
//     } 
// } ",
// opt1:"Runtime Error",
// opt2:"Happy Birthday",
// opt3:"Happy Birthday Roy Best Wishes !",
// opt4:"Compile Time Error",
// ans:"4"
// }],
[{
q:"23 It extends AbstractQueue and implements the Queue interface. It creates a queuethat is prioritized based on the queue’s comparator.",
opt1:"Deque",
opt2:"ArrayList",
opt3:"PriorityQueue",
opt4:"None of the above",
ans:"3"
}],
[{
q:"24 Iterator and ListIterator can traverse over",
opt1:"Set",
opt2:"Lists",
opt3:"SortedSet",
opt4:"Map",
ans:"2"
}],
[{
q:"25 Which among the following stores element in ascending order?",
opt1:"Set",
opt2:"SortedSet",
opt3:"TreeSet",
opt4:"LinkedList",
ans:"3"
}],
[{
q:"26 HashSet extends which of the following ",
opt1:"Set",
opt2:"SortedSet",
opt3:"AbstractSet",
opt4:"Hashtable",
ans:"3"
}],
[{
q:"27 Which method of LinkedList class is used to add elements to the start of the list ?",
opt1:"addLast()",
opt2:"add()",
opt3:"addFirst()",
opt4:"addStart()",
ans:"3"
}],
[{
q:"28 By using which objector you can access each element in the collection, one element at a time",
opt1:"iterator",
opt2:"comparator",
opt3:"collection",
opt4:"array",
ans:"1"
}],
[{
q:"29 It is an object that stores associations between keys and values, or key/value pairs",
opt1:"set",
opt2:"iterator",
opt3:"map",
opt4:"None of the above",
ans:"3"
}],
[{
q:"30 The methods compare() and equals() belong to which interface ?",
opt1:"Set",
opt2:"Comparator",
opt3:"Map",
opt4:"All of the above",
ans:"2"
}],
[{
q:"31 This class is the super class of Stack class that implements a standard last-in, first out stack.",
opt1:"Set",
opt2:"SortedSet",
opt3:"Vector",
opt4:"Hashtable",
ans:"3"
}],
[{
q:"32 This class creates a special type of array that holds bit values. This array can increase in size as needed",
opt1:"Set",
opt2:"SortedSet",
opt3:"BitSet",
opt4:"Hashtable",
ans:"3"
}],
[{
q:"33 It is an abstract class that represents a key/value storage repository and operates like Map. Once the value is stored, you can retrieve it by using its key.",
opt1:"Dictionary",
opt2:"SortedSet",
opt3:"LinkedList",
opt4:"Hashtable",
ans:"1"
}],
[{
q:"34 It extends Collection and declares the behaviour of a collection that stores a sequence of elements ",
opt1:"Set",
opt2:"SortedSet",
opt3:"List",
opt4:"Hashtable",
ans:"3"
}],
[{
q:"35 It extends SortedSet to handle retrieval of elements based on closest match searches?",
opt1:"Set",
opt2:"NavigableSet",
opt3:"HashSet",
opt4:"TressSet",
ans:"2"
}],
[{
q:"36 Collection extends ______ interface.",
opt1:"Set",
opt2:"NavigableSet",
opt3:"Iterable",
opt4:"Comparator",
ans:"3"
}],
[{
q:"37 You can remove all elements except those of a specified group by calling which method",
opt1:"clear()",
opt2:"remove()",
opt3:"retainAll()",
opt4:"removeAll()",
ans:"3"
}],
[{
q:"38 This method return an array that contains the elements stored in the invoking collection.",
opt1:"toArray()",
opt2:"Array()",
opt3:"iterator()",
opt4:"Arrays()",
ans:"2"
}],
[{
q:"39 The correct declaration of Queue generic interface.",
opt1:"class Queue<E>",
opt2:"interface Queue<E>",
opt3:"interface Queue<>",
opt4:"class Queue<>",
ans:"2"
}],
[{
q:"40 It can function as standard, first-in, first-out queues or last-in, first-out stacks.",
opt1:"Set",
opt2:"PriorityQueue",
opt3:"Deque",
opt4:"TreeSet",
ans:"3"
}],
// [{
// q:"41 What is the output of the following ?import java.util.*;class HashSetDemo{	public static void main(String arg[])	{		HashSet hs = new HashSet<>();		hs.add("A");		hs.add("B");		hs.add("C");		hs.add("D");		System.out.println(hs);	}} ",
// opt1:"[A, B, C, D]",
// opt2:"[D, A, C, B]",
// opt3:"Compilation Error",
// opt4:"Runtime Error",
// ans:"3"
// }],
// [{
// q:"42 What is the output of the following ?import java.util.*;class TreesSetDemo{	public static void main(String arg[])	{		TreeSet<String> t = new TreeSet<String>();		t.add("B");		t.add("A");		t.add("D");		t.add("C");		t.add("E");		System.out.println(t);	}} ",
// opt1:"[A, B, C, D, E]",
// opt2:"[B, A, D, C, E]",
// opt3:"[E, C, D, A, B]",
// opt4:"Runtime Error",
// ans:"1"
// }],
// [{
// q:"43 What is the output of the following ?import java.util.*;class ArrayListDemo{	public static void main(String ag[])	ArrayList<String> a1 = new ArrayList<String>();	System.out.println(a1.size());	a1.add("A");	a1.add("F");	a1.add("C");	a1.add("X");	a1.add("R");	System.out.println(al.size());	al.remove("F");	al.remove(2);	System.out.println(al.size());}",
// opt1:"0	  5	  3",
// opt2:"0	  3	  5",
// opt3:"0	  5	  2",
// opt4:"Error",
// ans:"1"
// }],
// [{
// q:"44 What is the output of the programimport java.util.*;class ArrayListToArray {public static void main(String args[]) {ArrayList<Integer> al = new ArrayList<Integer>();al.add(1);al.add(2);al.add(3);al.add(4);a1.remove(2);Integer ia[] = new Integer[al.size()];ia = al.toArray(ia);int sum = 0;for(int i : ia){	sum += i;}System.out.println("Sum is: " + sum);}}",
// opt1:"Sum is: 10",
// opt2:"Sum is: 8",
// opt3:"Sum is: 7",
// opt4:"Sum is: 0",
// ans:"2"
// }],
// [{
// q:"45 What is the output of the following program import java.util.*;class ArrayDequeDemo {public static void main(String args[]) {ArrayDeque<String> ad = new ArrayDeque<String>();ad.push("A");ad.push("B");ad.push("D");ad.push("E");ad.push("F");System.out.print("Popping the stack: ");while(ad.peek() != null)System.out.print(ad.pop() + " ");System.out.println();}}",
// opt1:"Popping the stack:  F E D B A",
// opt2:"Popping the stack:  A B D E F",
// opt3:"Popping the stack:  F E B D A",
// opt4:"Popping the stack:  F E D A B",
// ans:"1"
// }],
// [{
// q:"46 Will the following program run ?class Demo {public static void main(String args[]) {ArrayList<String> al = new ArrayList<String>();al.add("C");al.add("A");al.add("E");al.add("B");al.add("D");al.add("F");System.out.print("Original contents of al: ");for(String i : a1){	System.out.println(i);}",
// opt1:"Yes",
// opt2:"Compilation Error",
// opt3:"Runtime Error",
// opt4:"None of the above",
// ans:"2"
// }],
// [{
// q:"47   ArrayList<String> al = new ArrayList<String>();		al.add("Hello ");		al.add("World ");		al.add("Welcome ");		al.add("to ");		al.add("IIPS");Which among the following is the correct way to display the given output :Output :Hello World Welcome to IIPSa)	Iterator<String> itr = al.iterator();
// 	while(itr.hasNext()) {
// 	String a = itr.next();
// 	System.out.print(a);

// b)	for(String i : a1)
// 	{
// 		System.out.print(a);
// 	}

// c)	for(String i : a1)
// 	{
// 		System.out.print(i);}",
// opt1:"Only a",
// opt2:"Only c",
// opt3:"Both a and c",
// opt4:"All 3",
// ans:"2"
// }],
[{
q:"48 Which is the correct declaration for a HashMap class with keys of type String and value type Double ?",
opt1:"class HashMap<String, Double>",
opt2:"class HashMap<>",
opt3:"class HashMap<Key>",
opt4:"class HashMap<Double, String>",
ans:"1"
}],
[{
q:"49 If you want to order elements a different way, then specify a _______ when you construct the set or map. ",
opt1:"SortedSet",
opt2:"Iterator",
opt3:"Comparator",
opt4:"HashMap",
ans:"3"
}],
[{
q:"50 Which is the correct way of using a Comparator in a user defined class MyClass",
opt1:"class MyComp implements Comparator<String>",
opt2:"class MyComp implements Comparator",
opt3:"class MyComp extends Comparator<String>",
opt4:"class MyComp extends Comparator<>",
ans:"1"
}],
  ],
[{rollNum:"IT2K17 - 09"}]],
[[
  [{
  q: "1. …………………….. method is used to remove any leading or trailing white space that may have inadvertently been entered by the user.",
  opt1: "trim()",
  opt2: "remove()",
  opt3:" replace()",
  opt4:" length() ",
  ans: "opt1"
  }],
  // [{
  // q: "2. What will be the output of the following Java program?
  
  //     import java.util.*;
  //     class Arraylist 
  //     {
  //         public static void main(String args[]) 
  //         {
  //             ArrayList obj = new ArrayList();
  //             obj.add("A");
  //             obj.add("B");
  //             obj.add("C");
  //             obj.add(1, "D");
  //             System.out.println(obj);
  //         }
  //     }",
  // opt1: " [A, B, C, D]",
  // opt2:" [A, D, B, C]",
  // opt3:"[A, D, C]",
  // opt4:" [A, B, C] ",
  // ans: "opt2"
  // }],
  // [{
  
  // q: "3. What will be the output of the following Java program?
  
  //     import java.util.*;
  //     class Output 
  //     {
  //         public static void main(String args[]) 
  //         {
  //             ArrayList obj = new ArrayList();
  //             obj.add("A");
  //             obj.ensureCapacity(3);
  //             System.out.println(obj.size());
  //         }
  //     }",
  // opt1: "1 " ,
  // opt2 :"2",
  // opt3:" 3",
  // opt4:" 4",
  // ans:  " a"
  // }],
  // [{
  // q:"4. What will be the output of the following Java program?
  
  //     class Output 
  //     {
  //         public static void main(String args[]) 
  //         {
  //             ArrayList obj = new ArrayList();
  //             obj.add("A");
  //             obj.add("D");
  //             obj.ensureCapacity(3);
  //             obj.trimToSize();
  //             System.out.println(obj.size());
  //          }      
  //     }",
  // opt1:" 1",
  // opt2 :"2",
  // opt3:" 3",
  // opt4:" 4",
  // ans:" opt2"
  // }],
  [{
  q:"5. Map implements collection interface?",
  opt1: " True",
  opt2:" False",
  ans:" opt2"
  }],
  [{
  q:"6. What is the premise of equality for IdentityHashMap?",
  opt1: " Reference equality",
  opt2:" Name equality",
  opt3:" Hashcode equality",
  opt4:" Length equality",
  ans:" opt1"
  }],
  [{
  q:"7. What happens if we put a key object in  a HashMap which exists?",
  opt1: " The new object replaces the older object",
  opt2:" The new object is discarded",
  opt3:" The old object is removed from the map",
  opt4:" It throws an exception as the key already exists in the map",
  ans:" opt1"
  }],
  [{
  q:"8. While finding the correct location for saving key value pair, how many times the key is hashed?",
  opt1: " 1",
  opt2:" 2",
  opt3:" 3",
  opt4:" unlimited till bucket is found",
  ans:" opt2"
  }],
  [{
  q:"9. If two threads access the same hashmap at the same time, what would happen?",
  opt1: " ConcurrentModificationException",
  opt2:" NullPointerException",
  opt3:" ClassNotFoundException",
  opt4:" RuntimeException",
  ans:" opt1"
  }],
  [{
  q:"10. How to externally synchronize hashmap?",
  opt1: " HashMap.synchronize(HashMap a)",
  opt2:"HashMap a= new HashMap() a.synchronize();",
  opt3:" Collections.synchronizedMap(new HashMap<String, String>());",
  opt4:" Collections.synchronize(new HashMap<String, String>());",
  ans:" opt3"
  }],
  // [{
  // q:"11.What will be the output of the following Javacode snippet?
  
  // advertisement
  // public class Demo
  // {
  //   public static void main(String[] args)
  //   {
  //     Map<Integer, Object> sampleMap = new TreeMap<Integer, Object>();
  //     sampleMap.put(1, null); 
  //     sampleMap.put(5, null); 
  //     sampleMap.put(3, null); 
  //     sampleMap.put(2, null); 
  //     sampleMap.put(4, null); 
   
  //        System.out.println(sampleMap);
  //    }
  // }",
  // opt1:  {1=null, 2=null, 3=null, 4=null, 5=null}",
  // opt2:" {5=null}",
  // opt3:" Exception is thrown",
  // opt4:" {1=null, 5=null, 3=null, 2=null, 4=null}",
  // ans:" opt1"
  // }],
  [{
  q:"12. If large number of items are stored in hash bucket, what happens to the internal structure?",
  opt1: " The bucket will switch from LinkedList to BalancedTree",
  opt2:" The bucket will increase its size by a factor of load size defined",
  opt3:" The LinkedList will be replaced by another hashmap",
  opt4:" Any further addition throws Overflow exception",
  ans:" opt1"
  }],
  [{
  q:"13.Is hashmap an ordered collection.",
  opt1: "True",
  opt2:" False",
  ans:" opt2"
  }],
  [{
  q:"14.How can we remove an object from ArrayList?",
  opt1: "remove() method",
  opt2:" using Iterator",
  opt3:" remove() method and using Iterator",
  opt4:" delete() method",
  ans:" opt3"
  }],
  [{
  
  q:"15. . How to remove duplicates from List?",
  opt1: ":HashSet<String> listToSet = new HashSet<String>(duplicateList);",
  opt2:" HashSet<String> listToSet = duplicateList.toSet();",
  opt3:" HashSet<String> listToSet = Collections.convertToSet(duplicateList);",
  opt4:" HashSet<String> listToSet = duplicateList.getSet();",
  ans:" opt1"
  }],
  [{
  q:"16. When two threads access the same ArrayList object what is the outcome of the program?",
  opt1: " Both are able to access the object",
  opt2:" ConcurrentModificationException is thrown",
  opt3:" One thread is able to access the object and second thread gets Null Pointer exception",
  opt4:" One thread is able to access the object and second thread will wait till control is passed to the second one",
  ans:" opt2"
  }],
  [{
  q:"17. How is Arrays.asList() different than the standard way of initialising List?",
  opt1: ":Both are same",
  opt2:" Arrays.asList() throws compilation error",
  opt3:" Arrays.asList() returns  fixed length list and doesn’t allow to add or remove elements",
  opt4:" We cannot access the list returned using Arrays.asList()",
  ans:" opt3"
  }],
  [{
  q:"18. What is the difference between length() and size() of ArrayList?",
  opt1: "length() and size() return the same value",
  opt2:" length() is not defined in ArrayList",
  opt3:" size() is not defined in ArrayList",
  opt4:" length() returns the capacity of ArrayList and size() returns the actual number of elements stored in the list",
  ans:" opt4"
  }],
  [{
    q:"19.  Which class provides thread safe implementation of List?",
  opt1: " ArrayList",
  opt2:" CopyOnWriteArrayList",
  opt3:" HashList",
  opt4:" List",
  ans:" opt2"
  }],
  [{
  q:"20.  Which of the below is not an implementation of List interface?",
  opt1: ": RoleUnresolvedList",
  opt2:" Stack",
  opt3:" AttibuteList",
  opt4:" SessionList",
  ans:" opt4"
  }],
  [{
  q:"21. What is the worst case complexity of accessing an element in ArrayList?",
  opt1: " O(n)",
  opt2:" O(1)",
  opt3:" O(nlogn)",
  opt4:" O(2)",
  ans:" opt2"
  }],
  [{
  q:"22.When an array is passed to opt1: method, will the content of the array undergo changes with the actions carried within the function?",
  opt1: " True",
  opt2:" False",
  ans:" opt1"
  }],
  [{
  q:"23. What is the default clone of HashSet?",
  opt1: " Deep clone",
  opt2:" Shallow clone",
  opt3:" Plain clone",
  opt4:" Hollow clone",
  ans:" opt2"
  }],
  [{
  q:"24. . Do we have get(Object o) method in HashSet.",
  opt1: " True",
  opt2:" False",
  ans:" opt2"
  }],
  [{
  q:"25.What does Collections.emptySet() return?",
  opt1: " Immutable Set",
  opt2:" Mutable Set",
  opt3:" The type of Set depends on the parameter passed to the emptySet() method",
  opt4:" Null object",
  ans:" opt1"
  }],
  [{
  q:"26.What are the initial capacity and load factor of HashSet?",
  opt1: " 10, 1.0",
  opt2:" 32, 0.75",
  opt3:" 16, 0.75",
  opt4:" 32, 1.0",
  ans:" opt3"
  }],
  [{
  q:"27.What is the relation between hashset and hashmap?",
  opt1: " HashSet internally implements HashMap",
  opt2:" HashMap internally implements HashSet",
  opt3:" HashMap is the interface; HashSet is the concrete class",
  opt4:" HashSet is the interface; HashMap is the concrete class",
  ans:" opt1"
  }],
  // [{
  // q:"28. What will be the output of the following Java code snippet?
  
  // public class Test 
  // {
  //   public static void main(String[] args) 
  //         {
  //     Set s = new HashSet();
  //     s.add(new Long(10));
  //     s.add(new Integer(10));
  //     for(Object object : s)
  //                 {
  //         System.out.println("test - "+object);
  //     }
  //   }
  // }",
  // opt1: "   Test - 10
  //    Test - 10",
  // opt2:" Test – 10",
  // opt3:" Runtime Exception",
  // opt4:" Compilation Failure",
  // ans:" opt1"
  // }],
  [{
  q:"29. Set has contains(Object o) method.",
  opt1: " True",
  opt2:" False",
  ans:" opt1"
  }],
  [{
  q:"30. What is the difference between TreeSet and SortedSet?",
  opt1: " TreeSet is more efficient than SortedSet",
  opt2:" SortedSet is more efficient than TreeSet",
  opt3:" TreeSet is an interface; SortedSet  a concrete class",
  opt4:" SortedSet is an interface; TreeSet is a concrete class",
  ans:" opt4"
  }],
  [{
  q:"31. What is the unique feature of LinkedHashSet?",
  opt1: " It is not opt1: valid class",
  opt2:" It maintains the insertion order and guarantees uniqueness",
  opt3:" It provides opt1: way to store key values with uniqueness",
  opt4:" The elements in the collection are linked to each other",
  ans:" opt2"
  }],
  [{
  q:"32.Which of these standard collection classes implements a linked list data structure?",
  opt1: " AbstractList",
  opt2:" LinkedList",
  opt3:" HashSet",
  opt4:" AbstractSet",
  ans:" opt2"
  }],
  [{
  q:"33.Which of these classes implements Set interface?",
  opt1: " ArrayList",
  opt2:" HashSet",
  opt3:" LinkedList",
  opt4:" DynamicList",
  ans:" opt2"
  }],
  [{
  q:"34. Which of these method of HashSet class is used to add elements to its object?",
  opt1: " add()",
  opt2:" Add()",
  opt3:" addFirst()",
  opt4:" insert()",
  ans:" opt1"
  }],
  [{
  q:"35.Which of these classes provide implementation of map interface?",
  opt1: " ArrayList",
  opt2:" HashMap",
  opt3:" LinkedList",
  opt4:" DynamicList",
  ans:" opt2"
  }],
  [{
  q:"36. Which of these method Map class is used to obtain an element in the map having specified key?",
  opt1: " search()",
  opt2:" get()",
  opt3:" set()",
  opt4:" look()",
  ans:" opt2"
  }],
  [{
  q:"37.Which of these are legacy classes?",
  opt1: " Stack",
  opt2:" Hashtable",
  opt3:" Vector",
  opt4:" All of the mentioned",
  ans:" opt4"
  }],
  [{
  q:"38.Which of these is the interface of legacy?",
  opt1: " Map",
  opt2:" Enumeration",
  opt3:" HashMap",
  opt4:" Hashtable",
  ans:" opt2"
  }],
  [{
  q:"39.What is the name of a data member of class Vector which is used to store a number of elements in the vector?",
  opt1: " length",
  opt2:" elements",
  opt3:" elementCount",
  opt4:" capacity",
  ans:" opt3"
  }],
  // [{
  // q:"40. What will be the output of the following Java code?
  
  //     import java.util.*;
  //     class vector 
  //     {
  //         public static void main(String args[]) 
  //         {
  //             Vector obj = new Vector(4,2);
  //             obj.addElement(new Integer(3));
  //             obj.addElement(new Integer(2));
  //             obj.addElement(new Integer(6));
  //             obj.insertElementAt(new Integer(8), 2);
  //             System.out.println(obj);
  //         }
  //     }",
  // opt1: " [3, 2, 6]",
  // opt2:" [3, 2, 8]",
  // opt3:" [3, 2, 6, 8]",
  // opt4:" [3, 2, 8, 6]",
  // ans:" opt4"
  // }],
  [{
  q:"41. Which of these classes is not part of Java’s collection framework?",
  opt1: " Maps",
  opt2:" Array",
  opt3:" Stack",
  opt4:" Queue",
  ans:" opt1"
  }],
  // [{
  // q:"42.What will be the output of the following Java program?
  
  //     import java.util.*;
  //     class Array 
  //     {
  //         public static void main(String args[]) 
  //         {
  //             int array[] = new int [5];
  //             for (int i = 5; i > 0; i--)
  //                 array[5-i] = i;
  //             Arrays.fill(array, 1, 4, 8);
  //             for (int i = 0; i < 5 ; i++)
  //                 System.out.print(array[i]);
  //         }
  //     }",
  // opt1: " 12885",
  // opt2:" 12845",
  // opt3:" 58881",
  // opt4:" 54881",
  // ans:" opt3"
  // }],
  [{
  q:"43.Which of these exceptions is thrown by remover() method?",
  opt1: " IOException",
  opt2:" SystemException",
  opt3:" ObjectNotFoundExeception",
  opt4:" IllegalStateException.",
  ans:" opt4"
  }],
  // [{
  // q:"44.What will be the output of the following Java program?",
  
  //     import java.util.*;
  //     class Collection_iterators 
  //     {
  //         public static void main(String args[]) 
  //         {
  //             ListIterator a "= list.listIterator();
  //                 if(a.previousIndex()! = -1)
  //                     while(a.hasNext())
  //                   System.out.print(a.next() + " ");
  //                 else
  //                    System.out.print("EMPTY");
  //         }
  //     }",
  // opt1: " 0",
  // opt2:" 1",
  // opt3:" -1",
  // opt4:" EMPTY",
  // ans:" opt4"
  // }],
  [{
  q:"45. Which of these interface handle sequences?",
  opt1: " Set",
  opt2:" List",
  opt3:" Comparator",
  opt4:" Collection",
  ans:" opt2"
  }],
  [{
  q:"46.Which of these is static variable defined in Collections?",
  opt1: " EMPTY_SET",
  opt2:" EMPTY_LIST",
  opt3:" EMPTY_MAP",
  opt4:" All of the mentioned",
  ans:" opt4"
  }],
  [{
  q:"47. .Which of the below is not opt1: subinterface of Queue?",
  opt1: " BlockingQueue",
  opt2:" BlockingEnque",
  opt3:" TransferQueue",
  opt4:" BlockingQueue",
  ans:" opt2"
  }],
  [{
  q:"48.What is the remaining capacity of BlockingQueue whose intrinsic capacity is not defined?",
  opt1: " Integer.MAX_VALUE",
  opt2:" BigDecimal.MAX_VALUE",
  opt3:" 99999999",
  opt4:" Integer.INFINITY",
  ans:" opt1"
  }],
  [{
  q:"49.PriorityQueue is thread safe.",
  opt1: " True",
  opt2:" False",
  ans:" opt1"
  }],
  [{
  q:"50.What is difference between dequeue() and peek() function of java?",
  opt1: " dequeue() and peek() remove and return the next time in line",
  opt2:" dequeue() and peek() return the next item in line",
  opt3:" dequeue() removes and returns the next item in line while peek() returns the next item in line",
  opt4:" peek() removes and returns the next item in line while dequeue() returns the next item in line.",
  ans:" opt3"
  }],
  [{
  q:"51. What is the difference between Queue and Stack?",
  opt1: " Stack is LIFO; Queue is FIFO",
  opt2:" Queue is LIFO; Stack is FIFO",
  opt3:" Stack and Queue is FIFO",
  opt4:" Stack and Queue is LIFO",
  ans:" opt1"
  }],
  [{
  q:"52.What are the use of front and rear pointers in CircularQueue implementation?",
  opt1: " Front pointer points to first element; rear pointer points to the last element",
  opt2:" Rear pointer points to first element; front pointer points to the last element",
  opt3:" Front and read pointers point to the first element",
  opt4:" Front pointer points to the first element; rear pointer points to null object.",
  ans:" opt3"
  }],
  [{
  q:"53. What is the correct method used to insert and delete items from the queue?",
  opt1: " push and pop",
  opt2:" enqueue and dequeue",
  opt3:" enqueue and peek",
  opt4:" add and remove",
  ans:" opt2"
  }],
  [{
  q:"54.Where does opt1: new element be inserted in linked list implementation of opt1: queue?",
  opt1: " Head of list",
  opt2:" Tail of list",
  opt3:" At the centre of list",
  opt4:" All the old entries are pushed and then the new element is inserted",
  ans:" opt2"
  }],
  [{
  q:"55.If the size of the array used to implement opt1: circular queue is MAX_SIZE. How rear moves to traverse inorder to insert an element in the queue?",
  opt1: " rear=(rear%1)+MAX_SIZE",
  opt2:" rear=(rear+1)%MAX_SIZE",
  opt3:" rear=rear+(1%MAX_SIZE)",
  opt4:" rear=rear%(MAX_SIZE+1)",
  ans:" opt2"
  }],
  ],
  [{rollNum:"IT2K17-17"}]],
  [[
    [{
    q: "1. The Java Collections Framework is a ____?",
    opt1: "group of interfaces",
    opt2: "group of classes",
    opt3: "group of interfaces and classes",
    opt4: "none of these",
    ans: "3"
    }]
,
    [{
    q: "2. Class arrays provide high level methods like?",
    opt1: "method binarySearch for seraching sorted arrays",
    opt2: "method equals for comparing arrays",
    opt3: "method fill for placing values into arrays",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "3. What interfaces extend interface Collection?",
    opt1: "Set",
    opt2: "Queue",
    opt3: "List",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "4. Key feature of Set interface?",
    opt1: "collection contains duplicate elements",
    opt2: "doesnot contain duplicate elements",
    opt3: "a and b ",
    opt4: "none of these",
    ans: "1"
    }]
,
    [{
    q: "5. What does queue represent?",
    opt1: "Duplicacy",
    opt2: "A waiting line",
    opt3: "both a and b",
    opt4: "none of these",
    ans: "2"
    }]
,
    [{
    q: "6. Key feature of List interface?",
    opt1: "Duplicacy",
    opt2: "An ordered collection",
    opt3: "Both a and b",
    opt4: "none of these",
    ans: "3"
    }]
,
    [{
    q: "7. What does class collection provide?",
    opt1: "Static method that manipulates collection",
    opt2: "Implements algorithms for searching ,sorting and so on",
    opt3: "can be manipulated polymorphically",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "8. List implemented via interface list through?",
    opt1: "ArrayList",
    opt2: "LinkedList",
    opt3: "Vector",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "9. ArrayList behaves like _____without synchronization?",
    opt1: "Vector",
    opt2: "Queue",
    opt3: "List",
    opt4: "LinkedList",
    ans: "1"
    }]
,
    [{
    q: "10.LinkedLists can be used to create?",
    opt1: "stacks",
    opt2: "Queue and deques",
    opt3: "trees",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "11. What are ArrayLists capable of?",
    opt1: "demonstrate collection interface capabilities",
    opt2: "place two strings arrays in ArrayLists",
    opt3: "use iterator to remove elements in ArrayLists",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "12. What are LinkedLists capable of?",
    opt1: "add elements of one List to the other",
    opt2: "convert strings to uppercase",
    opt3: "delete a range of elements",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "13. static method asList of class Arrays has features like?",
    opt1: "view an array as a list collection",
    opt2: "any modification made to array change the list view",
    opt3: "allows programmer to manipulate the array as if it were a list",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "14. Only operation permitted on the view returned by asList is?",
    opt1: "Set",
    opt2: "Queue",
    opt3: "List",
    opt4: "all of these",
    ans: "1"
    }]
,
    [{
    q: "15. Passing an array that contains data to toArray can cause?",
    opt1: "complie time errors",
    opt2: "logic error",
    opt3: "reached end of the program error",
    opt4: "all of these",
    ans: "2"
    }]
,
    [{
    q: "16. If the number of elements in the array are greater than the number of elements in the list then?",
    opt1: "the elememts of array are overwriten by the list's elements",
    opt2: "both of them retain their same values",
    opt3: "the elememts of list are overwriten by the array's elements",
    opt4: "none of these",
    ans: "3"
    }]
   ,
    [{
    q: "17. ?",
    opt1: "Set",
    opt2: "Queue",
    opt3: "List",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "18. What does class Vector provide?",
    opt1: "Array-like DS that can resize themeselves dynamically",
    opt2: "conatins a capacity",
    opt3: "grows by capacity increment if it requires additional space",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "19. Inserting an element into a Vector whose current size is less than its capacity is a_____?",
    opt1: "relatively slow operation",
    opt2: "relatively fast operation",
    opt3: "depends on element",
    opt4: "none of these",
    ans: "2"
    }]
,
    [{
    q: "20. Inserting an element into a Vector that needs to grow larger to accommodate the new element is a______ ?",
    opt1: "relatively slow operation",
    opt2: "relatively fast opertaion",
    opt3: "depends on element",
    opt4: "none of these",
    ans: "1"
    }]
    ,
    [{
    q: "21. vector methods ________ perform linear searches of a Vector's contents?",
    opt1: "contains",
    opt2: "indesOf",
    opt3: "none of these",
    opt4: "both a and b",
    ans: "4"
    }]
,
    [{
    q: "22. Which one of these is not a list algorithm?",
    opt1: "sort",
    opt2: "fill",
    opt3: "disjoint",
    opt4: "copy",
    ans: "3"
    }]
,
    [{
    q: "23. Which one of these is not a collection algorithm?",
    opt1: "min",
    opt2: "reverse",
    opt3: "frequency",
    opt4: "max",
    ans: "2"
    }]
,
    [{
    q: "25. Sort List elememts does?",
    opt1: "pass a comparator to method sort",
    opt2: "order is determined by natural order of element's type",
    opt3: "none of these",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "26. What does binarySearch do?",
    opt1: "locates object in List",
    opt2: "returns index of object in List if object exists",
    opt3: "returns negative value if the Object doesnot exist",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "27. How does binarySearch return negative values if Object doesnot exist ?",
    opt1: "calculate insertion point",
    opt2: "make the insertion point sign negative",
    opt3: "subtract 1 from insertion point",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "28. What does stack class do?",
    opt1: "implements stack DS",
    opt2: "extends class vector",
    opt3: "stores references to objects",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "29. New collection interface introduced in______?",
    opt1: "J2EE",
    opt2: "J2SE 5.0",
    opt3: "J2ME",
    opt4: "none of these",
    ans: "2"
    }]
,
    [{
    q: "30. ________ deletes all the elements from invoking collection?",
    opt1: "delete()",
    opt2: "refresh()",
    opt3: "clear()",
    opt4: "reset()",
    ans: "3"
    }]
,
    [{
    q: "31. Collection package is contained by which one of these?",
    opt1: "java.util",
    opt2: "java.awt",
    opt3: "java.lang",
    opt4: "java.net",
    ans: "1"
    }]
    ,
    [{
    q: "32. Which interface provides additional opertaions for inserting, removing, and inspecting elements?",
    opt1: "Set",
    opt2: "Queue",
    opt3: "List",
    opt4: "all of these",
    ans: "2"
    }]
,
    [{
    q: "33. What are different implementation classes associated with map?",
    opt1: "Hashtable and HashMap",
    opt2: "TreeMap",
    opt3: "none of these",
    opt4: "all of these",
    ans: "4"
    }]
,
    [{
    q: "34. By increasing the load factor in a hashtable we can get?",
    opt1: "faster program execution",
    opt2: "reduced hashing collisions",
    opt3: "better memory utilization",
    opt4: "all of these",
    ans: "3"
    }]
,
    [{
    q: "35. _______ does not extend Iterable?",
    opt1: "Map",
    opt2: "Collection",
    opt3: "none of these",
    opt4: "both of these",
    ans: "1"
    }]
,
    [{
    q: "36. Which of the following Collection are synchronized by their nature?",
    opt1: "Vector and SortedSet",
    opt2: "Hashtable and vector",
    opt3: "HashMap and hashtable",
    opt4: "SortedSet and hashtable",
    ans: "2"
    }]
,
    [{
    q: "37. Enumeration cannot remove elements of the collection it is iterating?",
    opt1: "True",
    opt2: "False",
    opt3: "none of these",
    opt4: ".",
    ans: "1"
    }]
,
    [{
    q: "38. The preferable implementation used to insert elements at any position in the collection?",
    opt1: "Set",
    opt2: "Queue",
    opt3: "LinkedList",
    opt4: "Vector",
    ans: "3"
    }]
,
    [{
    q: "39. Set uses which type od DS to store its elements?",
    opt1: "array",
    opt2: "ArrayList",
    opt3: "vector",
    opt4: "Map",
    ans: "4"
    }]
,
    [{
    q: "40. Which is a valid declaration of a float?",
    opt1: " float f = 1F",
    opt2: " float f = 1.0",
    opt3: " float f = 1 ",
    opt4: " float f = 1.0d",
    ans: "1"
    }]
,
    [{
    q: "42. Which one of these is not a query operation supported by collection inetrface?",
    opt1: "int size()",
    opt2: "toArray()",
    opt3: "boolean isEmpty()",
    opt4: "Iterator iterator()",
    ans: "2"
    }]
,
    [{
    q: "43. In working with________, it's imp to mention that the element at fromIndex is in it?",
    opt1: "equals()",
    opt2: "lastIndexOf()",
    opt3: "subList()",
    opt4: "none of these",
    ans: "3"
    }]
,
    [{
    q: "44. If you need random access without inserting or removing elements from any place ither than the end, which will offer optimal collection?",
    opt1: "ArrayList",
    opt2: "LinkedList",
    opt3: "Map",
    opt4: "none of these",
    ans: "1"
    }]
,
    [{
    q: "45. Both ArrayList and LinkedList implement the _________interface?",
    opt1: "Serializable interface",
    opt2: "Cloneable interface",
    opt3: "Remote interface",
    opt4: "none of these",
    ans: "2"
    }]
,
    [{
    q: "46. Because the collection of keys in a map must be unique, you get a ____back?",
    opt1: "Set",
    opt2: "collection",
    opt3: "List",
    opt4: "none of these",
    ans: "1"
    }]
,
    [{
    q: "47. If the underlying Map is modified outside the SetValue() method of Map.Entry interface, then the set of entries ?",
    opt1: "retains original values only",
    opt2: "stores the new values",
    opt3: "becomes invalid",
    opt4: "none of these",
    ans: "3"
    }]
,
    [{
    q: "48. Both HashMap and TreeMap implement the _______interface?",
    opt1: "Seriliazable interface",
    opt2: "Cloneable interface",
    opt3: "Remote interface",
    opt4: "none of these",
    ans: "2"
    }]
,
    [{
    q: "49. In which class the usefulness of the entry vanishes when its key is no longer reachable by any thread?",
    opt1: "WeakHashMap",
    opt2: "TreeMap",
    opt3: "HashMap",
    opt4: "none of these",
    ans: "1"
    }]
,
    [{
    q: "50. Which interface provides access methods to the ends of the set as well as to subsets of the set?",
    opt1: "Hash",
    opt2: "Map",
    opt3: "List",
    opt4: "SortedSet",
    ans: "4"
    }]
    ],[{rollNum:"IT2K17 - 05"}]],

    [[

      [{
      
      q:"1. What should we use get operations are more?"
      
      ,opt1:" ArrayList",
      opt2:" LinkedList",
      opt3:" Any",
      ans:"1"
      
      }],
      
      [{
      q:"2. Complexity of ArrayList get method"
      
      ,opt1:"O(n-1)",
      opt2:"O(n)",
      opt3:"O(1)",
      opt4:"O(2n)",
      ans:"3"
      }],
      
      [{
      q:"3. Which is sorted by natural order?"
      
      ,opt1:"LinkedHashSet",
      opt2:"TreeSet",
      opt3:"HashSet",
      opt4:"None",
      ans:"2"
      }],
      
      [{
      q:"4. Which of these maintains insertion order?"
      
      ,opt1:"List",
      opt2:"Set",
      opt3:"All",
      opt4:"None",
      ans:"1"
      }],
      
      [{
      q:"5. Which maintains insertion order?"
      
      ,opt1:"TreeSet",
      opt2:"HashSet",
      opt3:"LinkedHashSet",
      opt4:"None",
      ans:"3"
      }],
      
      [{
      q:"6. In Iterator, hasMoreElements() method of Enumeration has been changed to:"
      
      ,opt1:"hasNextElement()",
      opt2:"isNext()",
      opt3:"hasNext()",
      opt4:"name remains same",
      ans:"3"
      }],
      
      [{
      q:"7. TreeSet internally uses which one to store elements?"
      
      ,opt1:"HashMap",
      opt2:"LinkedHashMap",
      opt3:"TreeMap",
      opt4:"None",
      ans:"3"
      }],
      
      [{
      q:"8. HashSet internally uses?"
      
      ,opt1:"HashMap",
      opt2:"LinkedHashMap",
      opt3:"TreeMap",
      opt4:"None",
      ans:"1"
      }],
      
      [{
      q:"9. An attempt to add null key to a TreeSet will result in:"
      
      ,opt1:"Will compile",
      opt2:"Compile time Exception",
      opt3:"Error",
      opt4:"Runtime - NullPointerException",
      ans:"4"
      }],
      
      [{
      q:"10. What is initial capacity of LinkedList?"
      
      ,opt1:"8",
      opt2:"10",
      opt3:"16",
      opt4:"10",
      ans:"2"
      }],
      
      [{
      q:"11. Enumeration returned by ArrayList is"
      
      ,opt1:"Fail-fast",
      opt2:"Fail-safe",
      opt3:"none",
      ans:"1"
      }],
      
      [{
      q:"12. LinkedHashMap allows"
      
      ,opt1:"one null key",
      opt2:"many null values",
      opt3:"none",
      opt4:"all",
      ans:"4"
      }],
      
      [{
      q:"13. Hashtable allows"
      
      ,opt1:"one null key",
      opt2:"many null values",
      opt3:"none",
      opt4:"all",
      ans:"3"
      }],
      
      [{
      q:"14. How can you sort given HashMap on basis of values"
      
      ,opt1:"Implement Comparator interface and override its compare method",
      opt2:"It's not possible",
      opt3:"Implement Comparator interface and override its compareTo method",
      opt4:"Implement Comparator and Comparable interface",
      ans:"1"
      }],
      
      // [{
      // q:"15. What will be output of following code -"
          
      // "import java.util.Hashmap;"
      
      // "class Employee{"
      //     "private String name;"
      
      //     "public Employee(String name){"
      //     "this.name=name;"
      // "}"
      // "@Override"
      //     "public int hashCode(){"
      //     "return(this.name==null ? 0:" 
      // "this.name.hashCode());"
      // "}"
      // "}"
      // "public class Program2{"
      //     "public static void main(String...ar){"
      //     "HashMap<Employee,String> hm=new HashMap<Employee,String>();"
      //     "hm.put(new Employee("a"),"emp1");"
      //     "hm.put(new Employee("b"),"emp2");"
      //     "hm.put(new Employee("a"),"emp1 OVERRIDDEN");"
      //     "System.out.pritnln(hm.size());"
      //     "System.out.pritnln(hm.get(new Employee("a")));"
      // "}"
      // "}"
      
      // ,opt1:"1",
      //         "null",
      // opt2:"2",
      //         "emp1 OVERRIDDEN",
      // opt3:"2",
      //         "null",
      // opt4:"1",
      //         "emp1 OVERRIDDEN",
      // ans:"2"
      // }],
      
      [{
      q:"16. What does Collections.sort internally uses when number of elements are less than 7?"
      
      ,opt1:"Insertion sort",
      opt2:"Merge sort",
      opt3:"Quick sort",
      opt4:"None",
      ans:"1"
      }],
      
      [{
      q:"17. What does Collections.sort internally uses when number of elements are greater than 7?"
      
      ,opt1:"Insertion sort",
      opt2:"Merge sort",
      opt3:"Quick sort",
      opt4:"None",
      ans:"2"
      }],
      
      [{
      q:"18. An attempt to add null key to a TreeMap will result in:"
      
      ,opt1:"Compile time Exception",
      opt2:"Error",
      opt3:"Runtime - NullPointerException",
      opt4:"None",
      ans:"3"
      }],
      
      [{
      q:"19. Which of these is synchronized and doesn't allow null elements?"
      
      ,opt1:"Vector",
      opt2:"CopyOnWriteArraySet",
      opt3:"CopyOnWriteArrayList",
      opt4:"ConcurrentSkipListSet",
      ans:"4"
      }],
      
      [{
      q:"20. Which of these is synchronized and isn't sorted by natural order?"
      
      ,opt1:"EnumSet",
      opt2:"LinkedList",
      opt3:"ConcurrentSkipListSet",
      opt4:"Vector",
      ans:"4"
      }],
      
      // [{
      // q:"21. What will be output of following code -"
      
      //     "import java.util.Iterator;
      //     import java.util.Map;
      //     import java.util.concurrent.ConcurrentSkipListMap;
      
      //     public class ConcurrentSkipListMapTest{
      //     public static void main(String arg[]){
      //     Map<Integer,String> concurrentSkipListMap= new ConcurrentSkipListMap<Integer,String>();
      //     concurrentSkipListMap.put(11,"audi");
      //     Iterator<Integer> keyIterator= concurrentSkipListMap.keySet().iterator();
      //     while(keyIterator.hasNext()){
      //     System.out.println(ketIterator.next());
      //     concurrentSkipListMap.put(13,"bmw");
      // }
      // }
      // }"
      
      // ,opt1:"11 followed by ConcurrentModificationException",
      // opt2:"11",
      // opt3:"ConcurrentModificationException",
      // opt4:"Compile time exception",
      // ans:"2"
      // }],
      
      [{
      q:"22. In ListIterator, after a call to next() or previous(), if a call is made to set(E element) followed by add() or remove() what happens?"
      
      ,opt1:"compilation error",
      opt2:"UnsupportedOperationException",
      opt3:"ConcurrentModificationException",
      opt4:"none",
      ans:"2"
      }],
      
      [{
      q:"23. Which interface must be implemented for sorting on basis many criterias"
      
      ,opt1:"Comparator",
      opt2:"Comparable",
      opt3:"Serializable",
      opt4:"None",
      ans:"1"
      }],
      
      [{
      q:"24. Can 2 threads on same ConcurrentHashMap object access it concurrently"
      
      ,opt1:"we need to add additional functionality to achieve the same.",
      opt2:"Its not possible",
      opt3:"different threads can access different segments concurrently.",
      ans:"3"
      }],
      
      [{
      q:"25. Which of these provides a get(in index) method?"
      
      ,opt1:"Map",
      opt2:"Set",
      opt3:"List",
      opt4:"All",
      ans:"3"
      }],
      
      [{
      q:"26. LinkedHashSet implements:"
      
      ,opt1:"Set",
      opt2:"Cloneable",
      opt3:"Serializable",
      opt4:"All",
      ans:"4"
      }],
      
      [{
      q:"27. In WeakHashMap"
      
      ,opt1:"An entry are automatically removed by garbage collector",
      opt2:"Behaves normally like HashMap",
      opt3:"An entry are never removed by garbage collector",
      opt4:"None",
      ans:"1"
      }],
      
      [{
      q:"28. A EnumSet"
      
      ,opt1:"Can use enum and non enum type keys",
      opt2:"Cannot use enum type keys",
      opt3:"is specialized Set implementation for use with enum type keys only",
      opt4:"None",
      ans:"3"
      }],
      
      [{
      q:"29. Iterator returned by HashSet is"
      
      ,opt1:"Fail-fast",
      opt2:"Fail-safe",
      opt3:"none",
      ans:"1"
      }],
      
      [{
      q:"30. Iterator returned by CopyOnWriteArraySet is"
      
      ,opt1:"Fail-fast",
      opt2:"Fail-safe",
      opt3:"none",
      ans:"2"
      }],
      
      [{
      q:"31. Iterator returned by TreeSet is"
      
      ,opt1:"Fail-fast",
      opt2:"Fail-safe",
      opt3:"none",
      ans:"1"
      }],
      
      [{
      q:"32. Iterator returned by LinkedHashSet is"
      
      ,opt1:"Fail-fast",
      opt2:"Fail-safe",
      opt3:"none",
      ans:"1",
      }],
      
      [{
      q:"33. Iterator returned by ConcurrentSkipListSet is"
      
      ,opt1:"Fail-fast",
      opt2:"Fail-safe",
      opt3:"none",
      ans:"2",
      }],
      
      [{
      q:"34. Which List is synchronized?"
      
      ,opt1:"Vector",
      opt2:"CopyOnWriteArrayList",
      opt3:"All",
      opt4:"none",
      ans:"3"
      }],
      
      [{
      q:"35. Which Set is synchronized?"
      
      ,opt1:"CopyOnWriteArraySet",
      opt2:"ConcurrentSkipListSet",
      opt3:"All",
      opt4:"none",
      ans:"3",
      }],
      
      [{
      q:"36. What is significance of using instanceOf operator and getClass() in equals method"
      
      ,opt1:"instanceOf will return true for comparing current class with its subclass as well",
      opt2:"getClass() will return true only if exactly same class is compared",
      opt3:"getClass() will return false when compared with subclass",
      opt4:"All",
      ans:"4"
      }],
      
      [{
      q:"37. Which of these does NOT have an index based structure?"
      
      ,opt1:"List",
      opt2:"Set",
      opt3:"Map",
      opt4:" ",
      ans:"2"
      
      }],
      
      [{
      q:"38. java.util.Collections is a:"
      
      ,opt1:"class",
      opt2:"interface",
      opt3:"object",
      opt4:"none",
      ans:"1"
      
      }],
      
      [{
      q:"39. Methods such as reverse, shuffle and sort are available in:"
      
      ,opt1:"Object",
      opt2:"Collection",
      opt3:"Collections",
      opt4:"Apache Commons Collections",
      ans:"3" 
      
      }],
      
      [{
      q:"40. Which of these allows duplicate elements?"
      
      ,opt1:"Set",
      opt2:"List",
      opt3:"All",
      opt4:"None",
      ans:"2"
      
      }],
      
      [{
      q:"41. Which allows the storage of a null key and many null values?"
      
      ,opt1:"Hashtable",
      opt2:"HashMap",
      opt3:"Both",
      opt4:"None",
      ans:"2"
      }],
      
      [{
      q:"42. In ConcurrentHashMap - When thread locks one segment for updation it does not block it for retrieval hence some other thread can read the same segment, but it will be able to read the data before locking?"
      
      ,opt1:"true",
      opt2:"false",
      opt3:"may be true/false", 
      ans:"1"
      
      }],
      
      [{
      q:"43. In ConcurrentHashMap - When thread locks one segment for updation it does not allow any other thread to perform updations in same segment until lock is not released on segment"
      
      ,opt1:"true",
      opt2:"false",
      opt3:"may be true/false",
      ans:"2"
      
      }],
      
      [{
      q:"44. What guarantees type-safety in a collection?"
      
      ,opt1:"Generics",
      opt2:"Abstract classes",
      opt3:"Interfaces",
      opt4:"Collection",
      ans:"1"
      
      }],
      
      [{
      q:"45. HashSet internally uses?"
      
      ,opt1:"Set",
      opt2:"HashMap",
      opt3:"List",
      opt4:"Collection",
      ans:"2"
      
      }],
      
      [{
      q:"46. The most used interfaces from the Collection framework are?"
      
      ,opt1:"List",
      opt2:"Map",
      opt3:"Set",
      opt4:"(All of these)",
      ans:"4"
      
      }],
      
      [{
      q:"47. The root interface of Java Collection framework hierarchy is -"
      
      ,opt1:"Collection",
      opt2:"Root",
      opt3:"Collections",
      opt4:"List/Set",
      ans:"1"
      
      }],
      
      [{
      q:"48. Which of these is synchronized?"
      
      ,opt1:"ArrayList",
      opt2:"LinkedList",
      opt3:"Vector",
      opt4:"(None of these)",
      ans:"3"
      
      }],
      
      [{
      q:"49. ArrayList implements which of the following?"
      
      ,opt1:"List",
      opt2:"RandomAccess",
      opt3:"Cloneable",
      opt4:"(All of these)",
      ans:"2"
      }],
      
      [{
      q:"50. Which of these allows the storage of many null values?"
      
      ,opt1:"Set",
      opt2:"List",
      opt3:"(None of these)",
      opt4:"(All of these)",
      ans:"4"
      }],
      ],
      
      [{rollNum:"IT-2K17-06"}]]
      ,

      
  
  
  ]
        
  const item1={title:"aaa"}
  let le=1;
  const [roll,setRoll]= useState("");
  
  // console.log("this is rollnum "+roll)
  // console.log(questions)

 useEffect(()=>{
  roll!=""?item.find((roll1)=>{roll1[1][0].rollNum==roll?setQuestions(roll1[0]):null}):null
 },[roll])


return (<View style={{flex:1}}>
        <ScrollView style={{flex:1}}>
       <View style={{marginBottom:10,width:100+"%"}}>
        <Text style={{fontSize:25,fontWeight:"bold",marginTop:35,marginLeft:10,marginBottom:5}}>Collection Questions</Text>
        <View style={{borderBottomWidth:2,borderColor:"#E9E8E9",marginBottom:5}}/>
        
        <FlatList
         data={item}
         //keyExtractor={ (item, index) => item.id }
         style={{flex:1,marginLeft:1.5+"%"}}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         renderItem={
         ({item}) => (
       
        <View style={roll!=item[1][0].rollNum?{alignItems:"center",justifyContent:"center",padding:3,backgroundColor:"white",
        elevation:5,margin:5,borderRadius:5,width:110,}:
        {alignItems:"center",justifyContent:"center",padding:3,backgroundColor:"#FF4404",
        elevation:15,margin:5,borderRadius:5,width:110,}}>
        <TouchableOpacity onPress={()=>{{setRoll(item[1][0].rollNum);setSel("")}}}>
         <Text style={{fontSize:16}}>{item[1][0].rollNum}</Text>
           {/* {console.log(roll+"aa")} */}
            </TouchableOpacity>
            {temp==0?<Image
              source={require('./image/Groupline.png')}
              style={{width:110,height:5}}
              />:null}
        </View>
         )}/>



        <View style={{borderBottomWidth:2,borderColor:"#E9E8E9",marginTop:5}}/>
        <FlatList
         data={questions}
     //keyExtractor={ (item, index) => item.id }
         style={{flex:1}}
         renderItem={
         ({item}) => (
        <View style={{backgroundColor:"white",padding:10,alignSelf:"center",marginBottom:5,marginTop:20,
        alignItems:"center",elevation:4,borderRadius:8,width:95+"%",paddingBottom:15}}>
        <View style={{flexDirection:"row",alignSelf:"flex-start"
        ,padding:10,paddingBottom:0,alignItems:"flex-end"}}>
        <Text style={[styles.heddingText]}>Q ></Text>
         <Text style={{fontSize:14,marginLeft:4,paddingRight:40}}>{item[0].q}</Text>
        </View>
        <TouchableOpacity
        onPress={()=> {setSel(item[0].ans);setRf([1,0,0,0])}}
        style={{width:100+"%"}}
        >
        <View style={[styles.textContainer,styles.containerStyle]}>
          <View style={{flexDirection:"row",alignItems:"center",flex:1,paddingLeft:10}}>
          {rf[0]==1&&sel==item[0].ans?
          <RadioButton1/>:<RadioButton/>}
          <Text style={styles.subText}>{item[0].opt1}</Text>
          </View>
        </View>      
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {setSel(item[0].ans);setRf([0,1,0,0])}}
        style={{width:100+"%"}}
        >
        <View style={[styles.textContainer,styles.containerStyle]}>
          <View style={{flexDirection:"row",alignItems:"center",flex:1,paddingLeft:10}}>
          {rf[1]==1&&sel==item[0].ans?
          <RadioButton1/>:<RadioButton/>}
          <Text style={styles.subText}>{item[0].opt2}</Text>
          </View>
        </View>      
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {setSel(item[0].ans);setRf([0,0,1,0])}}
        style={{width:100+"%"}}
        >
        <View style={[styles.textContainer,styles.containerStyle]}>
          <View style={{flexDirection:"row",alignItems:"center",flex:1,paddingLeft:10}}>
          {rf[2]==1&&sel==item[0].ans?
          <RadioButton1/>:<RadioButton/>}
          <Text style={styles.subText}>{item[0].opt3}</Text>
          </View>
        </View>      
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {setSel(item[0].ans);otp1=1;setRf([0,0,0,1])}}
        style={{width:100+"%"}}
        >
        <View style={[styles.textContainer,styles.containerStyle]}>
          <View style={{flexDirection:"row",alignItems:"center",flex:1,paddingLeft:10}}>
          {rf[3]==1&&sel==item[0].ans?
          <RadioButton1/>:<RadioButton/>}
          <Text style={styles.subText}>{item[0].opt4}</Text>
          </View>
        </View>      
        </TouchableOpacity>
        {sel==item[0].ans?<View style={{flexDirection:"row",alignSelf:"flex-start"
          ,padding:10,paddingBottom:0,alignItems:"flex-end"}}>
        <Text style={{fontSize:15,fontWeight:"500",alignSelf:"flex-start"}}>answer:</Text>
        <Text style={{fontSize:13,marginLeft:4,paddingRight:40}}>{item[0].ans}</Text>
        </View>:null}
       
        </View>
    )
  }
/>

</View>
     </ScrollView>
     </View>);
}

const styles = StyleSheet.create({
    heddingText: {
     fontSize:14,
     fontFamily:"SFProDisplay-Bold",
     color:"#000000",
     letterSpacing:-0.09,
     fontWeight:"bold",
     alignSelf:"flex-start",
    },
    subText:{
      fontSize:16,
      fontFamily:"SFProDisplay-Regular",
      letterSpacing:-0.1,
      paddingLeft:10,
      paddingRight:18,
      },
    form:{
        flex:1,
        padding:10,
        paddingLeft:18
    },
    textContainer:{
        borderWidth:1,
        width:100+"%",
        marginTop:15,
        backgroundColor:"#FFFFFF",
        borderColor:"#CDCDCD",
        borderRadius:4,
        paddingTop:10,
        paddingBottom:10
    },
    containerStyle: {
      borderTopWidth:0,
      elevation: 4,
      borderColor:"#FFFFFF",
      borderWidth:0,
        }
  });
 export default App;