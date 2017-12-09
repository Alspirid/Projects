


class PolyTreeNode

attr_accessor :parent, :children, :value, :visited

def initialize(value)
  @value = value
  @parent = nil
  @children = []
  @visited = false
end

def parent=(parent_node)

  # if parent.nil?
  #   #self.
  # end
  if parent_node != @parent
    if !parent_node.nil? && !parent_node.children.include?(self)
      if @parent != nil
        @parent.children.delete(self)
      end
      parent_node.children << self
    end
    @parent = parent_node
  end

end

def get_parent
  @parent
end

def add_child(child_node)
  # children << child_node
  child_node.parent=(self)
end

def remove_child(child_node)
  if !children.include?(child_node)
    raise "Node is not a child"
  else
    child_node.parent=(nil)
  end
end

def dfs(target_value)
  return self if @value == target_value
  return nil if children.empty?
  result = nil
  children.each do |child|
    result = child.dfs(target_value)
    return result if !result.nil? && result.value == target_value
  end
  result
end

def bfs(target_value)
  q_array = []
  q_array << self
  until q_array.empty?
    node = q_array.shift
    return node if node.value == target_value
    node.children.each do |child_node|
      q_array << child_node
    end
  end
  nil
end

end
