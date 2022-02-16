RegisterCommand(config.openCommand, function(source, args, rawCommand)
    TriggerClientEvent('Andyyy:OpenWAM', source)
end, false)

-- Check resource name to ensure callbacks will work.
if GetCurrentResourceName() ~= "Weapon-Animation-Menu-V2-reworked" then
    os.exit()
end
