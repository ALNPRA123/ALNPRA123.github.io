class Node:
   def __init__(self, data):
      self.data = data
      self.next = None
      self.prev = None

class doubly_linked_list:
   def __init__(self):
      self.head = None

# Adding data elements		
   def push(self, NewVal):
      NewNode = Node(NewVal)
      NewNode.next = self.head
      if self.head is not None:
         self.head.prev = NewNode
      self.head = NewNode

# Print the Doubly Linked list		
   def listprint(self, node):
      while (node is not None):
         print(node.data),
         last = node
         node = node.next
print("Numbering Quick Short")
dllist = doubly_linked_list()
dllist.push(46)
dllist.push(42)
dllist.push(40)
dllist.push(38)
dllist.push(35)
dllist.push(27)
dllist.push(21)
dllist.push(15)
dllist.listprint(dllist.head)