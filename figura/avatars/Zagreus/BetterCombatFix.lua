function events.render(_,context)
    vanilla_model.PLAYER:setVisible(not (renderer:isFirstPerson() and context == "RENDER"))
end