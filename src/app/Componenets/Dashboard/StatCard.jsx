"use client";
import React from "react";
import { Card } from "@heroui/react";

const StatCard = ({ title, value, icon: Icon, iconColor = "text-primary" }) => {
  return (
    <Card
      variant="default"
      className="border border-default-200/60 shadow-sm p-2"
    >
      {/* v3 Layout uses the structured compound syntax */}
      <Card.Header className="flex flex-row items-center justify-between w-full pb-1">
        <Card.Description className="text-xs font-semibold text-default-500 uppercase tracking-wider">
          {title}
        </Card.Description>

        {Icon && (
          <div className={`p-2.5 rounded-xl bg-default-100/70 ${iconColor}`}>
            <Icon size={22} strokeWidth={2} />
          </div>
        )}
      </Card.Header>

      <Card.Content className="pt-0">
        <Card.Title className="text-3xl font-bold tracking-tight text-default-900">
          {value}
        </Card.Title>
      </Card.Content>
    </Card>
  );
};

export default StatCard;
